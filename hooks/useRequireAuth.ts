"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./useAuth"
import type { UserRole } from "@/lib/generated/prisma"

interface UseRequireAuthOptions {
  redirectTo?: string
  requiredRole?: UserRole | UserRole[]
}

export function useRequireAuth(options: UseRequireAuthOptions = {}) {
  const { redirectTo = "/login", requiredRole } = options
  const router = useRouter()
  const { user, isLoading, isAuthenticated, hasRole } = useAuth()

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) {
      router.push(redirectTo)
      return
    }

    if (requiredRole && !hasRole(requiredRole)) {
      router.push("/dashboard")
    }
  }, [isLoading, isAuthenticated, requiredRole, hasRole, router, redirectTo])

  return {
    user,
    isLoading,
    isAuthenticated,
    isAuthorized: requiredRole ? hasRole(requiredRole) : isAuthenticated,
  }
}
