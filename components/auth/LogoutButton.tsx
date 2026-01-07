"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoutButtonProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function LogoutButton({ variant = "ghost", size, className }: LogoutButtonProps) {
  const handleLogout = () => {
    signOut({ callbackUrl: "/" })
  }

  return (
    <Button variant={variant} size={size} onClick={handleLogout} className={cn(className)}>
      <LogOut className="mr-2 h-4 w-4" />
      Se déconnecter
    </Button>
  )
}
