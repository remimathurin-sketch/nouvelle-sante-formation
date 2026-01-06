import { Suspense } from "react"
import { ResetPasswordForm } from "@/components/auth"
import { Loader2 } from "lucide-react"

export const metadata = {
  title: "Réinitialiser le mot de passe | Nouvelle Santé Formation",
  description: "Réinitialisez votre mot de passe",
}

function ResetPasswordFormFallback() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetPasswordFormFallback />}>
      <ResetPasswordForm />
    </Suspense>
  )
}
