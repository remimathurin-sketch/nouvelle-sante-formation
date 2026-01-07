'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Loader2, CheckCircle, Tag, ExternalLink, CreditCard } from 'lucide-react'
import {
  FormationType,
  PaymentOptionType,
  FORMATION_PRICES,
  formatPrice,
  calculatePrice,
} from '@/lib/stripe'

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
)

interface CheckoutFormProps {
  formation: FormationType
}

interface CustomerInfo {
  clientType: 'particulier' | 'entreprise'
  firstName: string
  lastName: string
  email: string
  address: string
  city: string
  postalCode: string
  country: string
}

export function CheckoutForm({ formation }: CheckoutFormProps) {
  const router = useRouter()
  const { data: session } = useSession()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    clientType: 'particulier',
    firstName: session?.user?.firstName || '',
    lastName: session?.user?.lastName || '',
    email: session?.user?.email || '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France',
  })

  const [paymentOption, setPaymentOption] = useState<PaymentOptionType>('ONE_TIME')
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<{
    code: string
    discountPercent: number
  } | null>(null)
  const [promoError, setPromoError] = useState<string | null>(null)
  const [promoLoading, setPromoLoading] = useState(false)

  // Pre-fill from session
  useEffect(() => {
    if (session?.user) {
      setCustomerInfo((prev) => ({
        ...prev,
        firstName: session.user.firstName || prev.firstName,
        lastName: session.user.lastName || prev.lastName,
        email: session.user.email || prev.email,
      }))
    }
  }, [session])

  const formationData = FORMATION_PRICES[formation]
  const priceData = calculatePrice(
    formation,
    paymentOption,
    appliedPromo?.code
  )

  const handleApplyPromo = async () => {
    if (!promoCode.trim()) return

    setPromoLoading(true)
    setPromoError(null)

    try {
      const res = await fetch('/api/promo-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: promoCode }),
      })

      const data = await res.json()

      if (data.valid) {
        setAppliedPromo({
          code: promoCode.toUpperCase(),
          discountPercent: data.discountPercent,
        })
        setPromoError(null)
      } else {
        setPromoError('Code promo invalide')
        setAppliedPromo(null)
      }
    } catch {
      setPromoError('Erreur lors de la vérification')
    } finally {
      setPromoLoading(false)
    }
  }

  const handleSubmit = async () => {
    // Validate form
    if (
      !customerInfo.firstName ||
      !customerInfo.lastName ||
      !customerInfo.email ||
      !customerInfo.address ||
      !customerInfo.city ||
      !customerInfo.postalCode
    ) {
      setError('Veuillez remplir tous les champs obligatoires')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formation,
          paymentOption,
          promoCode: appliedPromo?.code,
          customerInfo,
        }),
      })

      const data = await res.json()

      if (data.error) {
        setError(data.error)
        return
      }

      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
      } else if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsLoading(false)
    }
  }

  // If we have a client secret, show the payment form
  if (clientSecret) {
    return (
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
          appearance: {
            theme: 'stripe',
            variables: {
              colorPrimary: '#8B5CF6',
            },
          },
        }}
      >
        <PaymentForm
          clientSecret={clientSecret}
          amount={priceData.finalPrice}
          formation={formation}
        />
      </Elements>
    )
  }

  return (
    <div className="space-y-8">
      {/* Type de client */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Type de client</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={customerInfo.clientType}
            onValueChange={(value: 'particulier' | 'entreprise') =>
              setCustomerInfo({ ...customerInfo, clientType: value })
            }
            className="flex gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="particulier" id="particulier" />
              <Label htmlFor="particulier">Particulier</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="entreprise" id="entreprise" />
              <Label htmlFor="entreprise">Entreprise</Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Informations personnelles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Informations personnelles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom *</Label>
              <Input
                id="firstName"
                value={customerInfo.firstName}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom de famille *</Label>
              <Input
                id="lastName"
                value={customerInfo.lastName}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={customerInfo.email}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, email: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Adresse *</Label>
            <Input
              id="address"
              value={customerInfo.address}
              onChange={(e) =>
                setCustomerInfo({ ...customerInfo, address: e.target.value })
              }
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ville *</Label>
              <Input
                id="city"
                value={customerInfo.city}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, city: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Code postal *</Label>
              <Input
                id="postalCode"
                value={customerInfo.postalCode}
                onChange={(e) =>
                  setCustomerInfo({ ...customerInfo, postalCode: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Pays</Label>
            <Select
              value={customerInfo.country}
              onValueChange={(value: string) =>
                setCustomerInfo({ ...customerInfo, country: value })
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="France">France</SelectItem>
                <SelectItem value="Belgique">Belgique</SelectItem>
                <SelectItem value="Suisse">Suisse</SelectItem>
                <SelectItem value="Luxembourg">Luxembourg</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Code promo */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Tag className="h-5 w-5" />
            Code promo (optionnel)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input
              placeholder="Entrez votre code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              disabled={!!appliedPromo}
            />
            {appliedPromo ? (
              <Button
                variant="outline"
                onClick={() => {
                  setAppliedPromo(null)
                  setPromoCode('')
                }}
              >
                Retirer
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={handleApplyPromo}
                disabled={promoLoading || !promoCode.trim()}
              >
                {promoLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  'Appliquer'
                )}
              </Button>
            )}
          </div>
          {appliedPromo && (
            <div className="mt-2 flex items-center gap-2 text-green-600">
              <CheckCircle className="h-4 w-4" />
              <span className="text-sm">
                Code {appliedPromo.code} appliqué (-{appliedPromo.discountPercent}%)
              </span>
            </div>
          )}
          {promoError && (
            <p className="mt-2 text-sm text-red-500">{promoError}</p>
          )}
        </CardContent>
      </Card>

      {/* Parcours sélectionné */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Parcours sélectionné</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-lg bg-primary/5 border border-primary/20">
            <div>
              <h3 className="font-semibold">{formationData.name}</h3>
              <p className="text-sm text-muted-foreground">
                Formation complète avec accompagnement
              </p>
            </div>
            <Badge variant="secondary" className="text-lg">
              {formatPrice(formationData.basePrice)}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Options de paiement */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Options de paiement</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={paymentOption}
            onValueChange={(value: PaymentOptionType) => setPaymentOption(value)}
            className="space-y-3"
          >
            <div
              className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                paymentOption === 'ONE_TIME'
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
              onClick={() => setPaymentOption('ONE_TIME')}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="ONE_TIME" id="one-time" />
                <Label htmlFor="one-time" className="cursor-pointer">
                  <span className="font-semibold">Paiement en 1x</span>
                  <span className="text-muted-foreground ml-2">
                    (meilleur prix)
                  </span>
                </Label>
              </div>
              <span className="font-bold">
                {formatPrice(FORMATION_PRICES[formation].prices.ONE_TIME)}
              </span>
            </div>

            <div
              className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                paymentOption === 'TWO_TIMES'
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
              onClick={() => setPaymentOption('TWO_TIMES')}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="TWO_TIMES" id="two-times" />
                <Label htmlFor="two-times" className="cursor-pointer">
                  <span className="font-semibold">Paiement en 2x</span>
                  <span className="text-muted-foreground ml-2">(+20%)</span>
                </Label>
              </div>
              <div className="text-right">
                <span className="font-bold">
                  {formatPrice(FORMATION_PRICES[formation].prices.TWO_TIMES / 2)}
                  /mois
                </span>
                <p className="text-xs text-muted-foreground">
                  soit {formatPrice(FORMATION_PRICES[formation].prices.TWO_TIMES)}{' '}
                  au total
                </p>
              </div>
            </div>

            <div
              className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                paymentOption === 'THREE_TIMES'
                  ? 'border-primary bg-primary/5'
                  : 'border-muted hover:border-primary/50'
              }`}
              onClick={() => setPaymentOption('THREE_TIMES')}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="THREE_TIMES" id="three-times" />
                <Label htmlFor="three-times" className="cursor-pointer">
                  <span className="font-semibold">Paiement en 3x</span>
                  <span className="text-muted-foreground ml-2">(+20%)</span>
                </Label>
              </div>
              <div className="text-right">
                <span className="font-bold">
                  {formatPrice(FORMATION_PRICES[formation].prices.THREE_TIMES / 3)}
                  /mois
                </span>
                <p className="text-xs text-muted-foreground">
                  soit{' '}
                  {formatPrice(FORMATION_PRICES[formation].prices.THREE_TIMES)} au
                  total
                </p>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      {/* CPF Button */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-blue-900">
                Financement via le CPF
              </h3>
              <p className="text-sm text-blue-700">
                Utilisez votre Compte Personnel de Formation
              </p>
            </div>
            <Button variant="outline" className="border-blue-300" asChild>
              <a
                href="https://www.moncompteformation.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                Accéder au CPF
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Récapitulatif */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">Récapitulatif</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Sous-total</span>
            <span>{formatPrice(priceData.originalPrice)}</span>
          </div>
          {appliedPromo && (
            <div className="flex justify-between text-green-600">
              <span>Réduction ({appliedPromo.discountPercent}%)</span>
              <span>
                -{formatPrice(priceData.originalPrice - priceData.finalPrice)}
              </span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>Total à payer</span>
            <span className="text-primary">{formatPrice(priceData.finalPrice)}</span>
          </div>
          {priceData.monthlyPrice && (
            <p className="text-sm text-muted-foreground text-right">
              soit {formatPrice(priceData.monthlyPrice)} x{' '}
              {paymentOption === 'TWO_TIMES' ? '2' : '3'} mois
            </p>
          )}
        </CardContent>
      </Card>

      {/* Error message */}
      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
          {error}
        </div>
      )}

      {/* Submit button */}
      <Button
        onClick={handleSubmit}
        disabled={isLoading}
        size="lg"
        className="w-full text-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Traitement en cours...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-5 w-5" />
            Payer {formatPrice(priceData.finalPrice)}
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        En cliquant sur &quot;Payer&quot;, vous acceptez nos{' '}
        <a href="/conditions-generales-de-vente" className="underline">
          CGV
        </a>{' '}
        et notre{' '}
        <a href="/politique-de-confidentialite" className="underline">
          politique de confidentialité
        </a>
        .
      </p>
    </div>
  )
}

// Payment Form with Stripe Elements
function PaymentForm({
  clientSecret,
  amount,
  formation,
}: {
  clientSecret: string
  amount: number
  formation: FormationType
}) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) return

    setIsProcessing(true)
    setError(null)

    const { error: submitError } = await elements.submit()
    if (submitError) {
      setError(submitError.message || 'Une erreur est survenue')
      setIsProcessing(false)
      return
    }

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/merci-pour-ton-paiement-${formation}`,
      },
    })

    if (confirmError) {
      setError(confirmError.message || 'Erreur lors du paiement')
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Paiement sécurisé
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PaymentElement />
        </CardContent>
      </Card>

      {error && (
        <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        size="lg"
        className="w-full text-lg"
      >
        {isProcessing ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Traitement en cours...
          </>
        ) : (
          <>
            <CreditCard className="mr-2 h-5 w-5" />
            Payer {formatPrice(amount)}
          </>
        )}
      </Button>
    </form>
  )
}
