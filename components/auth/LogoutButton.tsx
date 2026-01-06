"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function LogoutButton({ variant = "ghost" }: LogoutButtonProps) {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <Button variant={variant} onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4" />
      Se déconnecter
    </Button>
  )
}
