import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import {
  generateToken,
  getPasswordResetExpiration,
  hashPassword,
  isTokenExpired,
} from "@/lib/auth-utils"
import {
  resetPasswordRequestSchema,
  resetPasswordSchema,
} from "@/lib/validations/auth"

// Request password reset
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedFields = resetPasswordRequestSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: "Email invalide" },
        { status: 400 }
      )
    }

    const { email } = validatedFields.data

    const user = await db.user.findUnique({
      where: { email },
    })

    // Always return success to prevent email enumeration
    if (!user) {
      return NextResponse.json({
        message: "Si un compte existe avec cet email, vous recevrez un lien de réinitialisation",
      })
    }

    // Delete existing tokens for this email
    await db.passwordResetToken.deleteMany({
      where: { email },
    })

    // Create new token
    const token = generateToken()
    await db.passwordResetToken.create({
      data: {
        email,
        token,
        expires: getPasswordResetExpiration(),
      },
    })

    // TODO: Send email with reset link
    // For now, log the token (remove in production)
    console.log(`Password reset token for ${email}: ${token}`)

    return NextResponse.json({
      message: "Si un compte existe avec cet email, vous recevrez un lien de réinitialisation",
    })
  } catch (error) {
    console.error("Password reset request error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}

// Complete password reset
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const validatedFields = resetPasswordSchema.safeParse(body)

    if (!validatedFields.success) {
      return NextResponse.json(
        { error: "Données invalides", details: validatedFields.error.flatten() },
        { status: 400 }
      )
    }

    const { token, password } = validatedFields.data

    const resetToken = await db.passwordResetToken.findUnique({
      where: { token },
    })

    if (!resetToken) {
      return NextResponse.json(
        { error: "Token invalide ou expiré" },
        { status: 400 }
      )
    }

    if (isTokenExpired(resetToken.expires)) {
      await db.passwordResetToken.delete({
        where: { id: resetToken.id },
      })
      return NextResponse.json(
        { error: "Token expiré. Veuillez refaire une demande." },
        { status: 400 }
      )
    }

    const hashedPassword = await hashPassword(password)

    await db.user.update({
      where: { email: resetToken.email },
      data: { password: hashedPassword },
    })

    await db.passwordResetToken.delete({
      where: { id: resetToken.id },
    })

    return NextResponse.json({
      message: "Mot de passe réinitialisé avec succès",
    })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    )
  }
}
