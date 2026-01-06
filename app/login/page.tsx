import { Suspense } from "react"
import { LoginForm } from "@/components/auth"
import { Loader2 } from "lucide-react"

export const metadata = {
  title: "Connexion | Nouvelle Santé Formation",
  description: "Connectez-vous à votre espace membre",
}

function LoginFormFallback() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginFormFallback />}>
      <LoginForm />
    </Suspense>
  )
}
