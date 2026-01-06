import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getToken } from "next-auth/jwt"

const publicRoutes = [
  "/",
  "/login",
  "/register",
  "/reset-password",
  "/mentions-legales",
  "/conditions-generales-de-vente",
  "/conditions-generales-utilisation",
  "/politique-de-confidentialite",
]

const authRoutes = ["/login", "/register", "/reset-password"]

const adminRoutes = ["/admin"]

export async function middleware(req: NextRequest) {
  const { nextUrl } = req

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  const isLoggedIn = !!token
  const userRole = token?.role as string | undefined

  const isPublicRoute = publicRoutes.some(
    (route) => nextUrl.pathname === route || nextUrl.pathname.startsWith("/api/auth")
  )
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  const isAdminRoute = adminRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  )
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard")

  // Allow API routes
  if (nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next()
  }

  // Redirect logged-in users away from auth pages
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl))
  }

  // Allow public routes
  if (isPublicRoute) {
    return NextResponse.next()
  }

  // Require authentication for dashboard routes
  if (isDashboardRoute && !isLoggedIn) {
    const callbackUrl = encodeURIComponent(nextUrl.pathname)
    return NextResponse.redirect(new URL(`/login?callbackUrl=${callbackUrl}`, nextUrl))
  }

  // Require admin role for admin routes
  if (isAdminRoute) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", nextUrl))
    }
    if (userRole !== "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard", nextUrl))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
