import bcrypt from "bcryptjs"
import { randomBytes } from "crypto"

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12)
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(): string {
  return randomBytes(32).toString("hex")
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function getPasswordResetExpiration(): Date {
  return new Date(Date.now() + 60 * 60 * 1000) // 1 hour
}

export function isTokenExpired(expires: Date): boolean {
  return new Date() > expires
}
