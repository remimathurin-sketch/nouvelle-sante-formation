"use client"

import { useSession } from "next-auth/react"
import type { UserRole } from "@/lib/generated/prisma"

export function useAuth() {
  const { data: session, status } = useSession()

  const isLoading = status === "loading"
  const isAuthenticated = status === "authenticated"
  const user = session?.user

  const hasRole = (role: UserRole | UserRole[]) => {
    if (!user?.role) return false
    if (Array.isArray(role)) {
      return role.includes(user.role)
    }
    return user.role === role
  }

  const isAdmin = user?.role === "ADMIN"
  const isCoach = user?.role === "COACH"
  const isStudent = user?.role === "STUDENT"

  return {
    user,
    session,
    isLoading,
    isAuthenticated,
    hasRole,
    isAdmin,
    isCoach,
    isStudent,
  }
}
