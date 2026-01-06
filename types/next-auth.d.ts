import { UserRole } from "@/lib/generated/prisma"
import { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      role: UserRole
      firstName: string | null
      lastName: string | null
    } & DefaultSession["user"]
  }

  interface User extends DefaultUser {
    role: UserRole
    firstName: string | null
    lastName: string | null
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    role: UserRole
    firstName: string | null
    lastName: string | null
  }
}
