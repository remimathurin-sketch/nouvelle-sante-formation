import { Metadata } from 'next'
import { EligibilityQuiz } from '@/components/quiz'

export const metadata: Metadata = {
  title: "Test d'éligibilité VAE - Deviens Aide-Soignant ou Auxiliaire de Vie",
  description:
    "Découvre en 2 minutes si tu es éligible à la VAE pour devenir Aide-Soignant(e) ou Auxiliaire de Vie. Test gratuit, résultat immédiat.",
}

export default function EligibilityTestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <EligibilityQuiz />
      </div>
    </div>
  )
}
