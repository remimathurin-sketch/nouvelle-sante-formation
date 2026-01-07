import { NextRequest, NextResponse } from 'next/server'
import { validatePromoCode } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()

    if (!code) {
      return NextResponse.json({ valid: false, error: 'Code requis' })
    }

    const result = validatePromoCode(code)

    return NextResponse.json(result)
  } catch (error) {
    console.error('Error validating promo code:', error)
    return NextResponse.json({ valid: false, error: 'Erreur serveur' })
  }
}
