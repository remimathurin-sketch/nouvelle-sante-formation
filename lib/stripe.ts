import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
})

// Formation prices (in cents)
export const FORMATION_PRICES = {
  'aide-soignant': {
    name: 'VAE Aide-Soignant (DEAS)',
    slug: 'aide-soignant',
    basePrice: 240000, // 2400€
    prices: {
      ONE_TIME: 240000,      // 2400€
      TWO_TIMES: 288000,     // 2880€ total (1440€ x 2) - 20% more
      THREE_TIMES: 288000,   // 2880€ total (960€ x 3) - 20% more
    },
  },
  'auxiliaire-de-vie': {
    name: 'VAE Auxiliaire de Vie (DEAES)',
    slug: 'auxiliaire-de-vie',
    basePrice: 200000, // 2000€
    prices: {
      ONE_TIME: 200000,      // 2000€
      TWO_TIMES: 240000,     // 2400€ total (1200€ x 2) - 20% more
      THREE_TIMES: 240000,   // 2400€ total (800€ x 3) - 20% more
    },
  },
} as const

export type FormationType = keyof typeof FORMATION_PRICES
export type PaymentOptionType = 'ONE_TIME' | 'TWO_TIMES' | 'THREE_TIMES'

// Promo codes configuration
export const PROMO_CODES: Record<string, { discountPercent: number; description: string }> = {
  'CPF100': { discountPercent: 100, description: 'Financement CPF 100%' },
  'FREE': { discountPercent: 100, description: 'Offre spéciale' },
  'HAPPYHOUSE50': { discountPercent: 50, description: 'Réduction 50%' },
}

export function validatePromoCode(code: string): { valid: boolean; discountPercent: number; description?: string } {
  const upperCode = code.toUpperCase().trim()
  const promo = PROMO_CODES[upperCode]

  if (promo) {
    return { valid: true, discountPercent: promo.discountPercent, description: promo.description }
  }

  return { valid: false, discountPercent: 0 }
}

export function calculatePrice(
  formation: FormationType,
  paymentOption: PaymentOptionType,
  promoCode?: string
): { originalPrice: number; finalPrice: number; discountPercent: number; monthlyPrice?: number } {
  const formationData = FORMATION_PRICES[formation]
  const originalPrice = formationData.prices[paymentOption]

  let discountPercent = 0
  if (promoCode) {
    const promo = validatePromoCode(promoCode)
    if (promo.valid) {
      discountPercent = promo.discountPercent
    }
  }

  const finalPrice = Math.round(originalPrice * (1 - discountPercent / 100))

  let monthlyPrice: number | undefined
  if (paymentOption === 'TWO_TIMES') {
    monthlyPrice = Math.round(finalPrice / 2)
  } else if (paymentOption === 'THREE_TIMES') {
    monthlyPrice = Math.round(finalPrice / 3)
  }

  return { originalPrice, finalPrice, discountPercent, monthlyPrice }
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100)
}
