import { NextRequest, NextResponse } from 'next/server'
import { stripe, calculatePrice, FORMATION_PRICES, FormationType, PaymentOptionType } from '@/lib/stripe'
import { db } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { formation, paymentOption, promoCode, customerInfo } = body as {
      formation: FormationType
      paymentOption: PaymentOptionType
      promoCode?: string
      customerInfo: {
        clientType: 'particulier' | 'entreprise'
        firstName: string
        lastName: string
        email: string
        address: string
        city: string
        postalCode: string
        country: string
      }
    }

    // Validate formation
    if (!FORMATION_PRICES[formation]) {
      return NextResponse.json({ error: 'Formation invalide' }, { status: 400 })
    }

    // Calculate price
    const priceData = calculatePrice(formation, paymentOption, promoCode)

    // If 100% discount, create a free order
    if (priceData.finalPrice === 0) {
      // Find or create user
      let user = await db.user.findUnique({
        where: { email: customerInfo.email },
      })

      if (!user) {
        user = await db.user.create({
          data: {
            email: customerInfo.email,
            firstName: customerInfo.firstName,
            lastName: customerInfo.lastName,
            name: `${customerInfo.firstName} ${customerInfo.lastName}`,
            address: customerInfo.address,
            city: customerInfo.city,
            postalCode: customerInfo.postalCode,
            country: customerInfo.country,
          },
        })
      }

      // Find formation in DB
      const formationData = FORMATION_PRICES[formation]
      let dbFormation = await db.formation.findUnique({
        where: { slug: formationData.slug },
      })

      if (!dbFormation) {
        // Create formation if doesn't exist
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
      await db.order.create({
        data: {
          userId: user.id,
          formationId: dbFormation.id,
          amount: 0,
          paymentOption: paymentOption === 'ONE_TIME' ? 'ONE_TIME' : paymentOption === 'TWO_TIMES' ? 'TWO_TIMES' : 'THREE_TIMES',
          promoCode: promoCode,
          stripeSessionId: `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
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

      // Redirect to thank you page
      return NextResponse.json({
        url: `/merci-pour-ton-paiement-${formation}?free=true`,
      })
    }

    // Create Stripe Checkout Session
    const formationData = FORMATION_PRICES[formation]

    // Determine payment mode
    let mode: 'payment' | 'subscription' = 'payment'
    let lineItems: any[] = []

    if (paymentOption === 'ONE_TIME') {
      lineItems = [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: formationData.name,
              description: 'Formation VAE complète avec accompagnement personnalisé',
            },
            unit_amount: priceData.finalPrice,
          },
          quantity: 1,
        },
      ]
    } else {
      // For installments, we use payment mode with a single line item
      // In production, you might want to use Stripe subscriptions or payment plans
      const installments = paymentOption === 'TWO_TIMES' ? 2 : 3
      lineItems = [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `${formationData.name} - Paiement 1/${installments}`,
              description: `Premier paiement de votre formation (${installments} échéances)`,
            },
            unit_amount: Math.round(priceData.finalPrice / installments),
          },
          quantity: 1,
        },
      ]
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode,
      success_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/merci-pour-ton-paiement-${formation}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/page-de-paiement-${formation}`,
      customer_email: customerInfo.email,
      metadata: {
        formation,
        paymentOption,
        promoCode: promoCode || '',
        firstName: customerInfo.firstName,
        lastName: customerInfo.lastName,
        address: customerInfo.address,
        city: customerInfo.city,
        postalCode: customerInfo.postalCode,
        country: customerInfo.country,
      },
      billing_address_collection: 'auto',
      allow_promotion_codes: false,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    )
  }
}
