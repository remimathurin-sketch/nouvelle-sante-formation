import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { stripe, FORMATION_PRICES, FormationType, PaymentOptionType } from '@/lib/stripe'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session

        if (session.payment_status === 'paid') {
          await handleSuccessfulPayment(session)
        }
        break
      }

      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment succeeded:', paymentIntent.id)
        break
      }

      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.error('Payment failed:', paymentIntent.id)

        // Update order status if exists
        const existingOrder = await db.order.findUnique({
          where: { stripeSessionId: paymentIntent.id },
        })

        if (existingOrder) {
          await db.order.update({
            where: { id: existingOrder.id },
            data: { status: 'FAILED' },
          })
        }
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    )
  }
}

async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  const metadata = session.metadata || {}
  const formation = metadata.formation as FormationType
  const paymentOption = metadata.paymentOption as PaymentOptionType
  const promoCode = metadata.promoCode || null
  const email = session.customer_email || session.customer_details?.email

  if (!email || !formation) {
    console.error('Missing required data in session:', { email, formation })
    return
  }

  // Get formation data
  const formationData = FORMATION_PRICES[formation]
  if (!formationData) {
    console.error('Invalid formation:', formation)
    return
  }

  // Find or create user
  let user = await db.user.findUnique({
    where: { email },
  })

  if (!user) {
    user = await db.user.create({
      data: {
        email,
        firstName: metadata.firstName || null,
        lastName: metadata.lastName || null,
        name: metadata.firstName && metadata.lastName
          ? `${metadata.firstName} ${metadata.lastName}`
          : null,
        address: metadata.address || null,
        city: metadata.city || null,
        postalCode: metadata.postalCode || null,
        country: metadata.country || 'France',
      },
    })
  } else {
    // Update user info if provided
    await db.user.update({
      where: { id: user.id },
      data: {
        firstName: metadata.firstName || user.firstName,
        lastName: metadata.lastName || user.lastName,
        name: metadata.firstName && metadata.lastName
          ? `${metadata.firstName} ${metadata.lastName}`
          : user.name,
        address: metadata.address || user.address,
        city: metadata.city || user.city,
        postalCode: metadata.postalCode || user.postalCode,
        country: metadata.country || user.country,
      },
    })
  }

  // Find or create formation in DB
  let dbFormation = await db.formation.findUnique({
    where: { slug: formationData.slug },
  })

  if (!dbFormation) {
    dbFormation = await db.formation.create({
      data: {
        title: formationData.name,
        slug: formationData.slug,
        description: `Formation ${formationData.name}`,
        price: formationData.basePrice / 100,
        published: true,
      },
    })
  }

  // Create order
  const paymentOptionEnum = paymentOption === 'ONE_TIME'
    ? 'ONE_TIME'
    : paymentOption === 'TWO_TIMES'
      ? 'TWO_TIMES'
      : 'THREE_TIMES'

  await db.order.create({
    data: {
      userId: user.id,
      formationId: dbFormation.id,
      amount: (session.amount_total || 0) / 100,
      paymentOption: paymentOptionEnum,
      promoCode,
      stripeSessionId: session.id,
      status: 'PAID',
    },
  })

  // Create enrollment
  await db.enrollment.upsert({
    where: {
      userId_formationId: {
        userId: user.id,
        formationId: dbFormation.id,
      },
    },
    update: {},
    create: {
      userId: user.id,
      formationId: dbFormation.id,
    },
  })

  console.log(`Successfully processed payment for ${email} - ${formationData.name}`)

  // TODO: Send confirmation email
}
