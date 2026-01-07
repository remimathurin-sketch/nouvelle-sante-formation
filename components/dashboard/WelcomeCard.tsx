'use client'

import { Card, CardContent } from '@/components/ui/card'

interface WelcomeCardProps {
  firstName: string
}

const quotes = [
  "Le succès n'est pas la clé du bonheur. Le bonheur est la clé du succès.",
  "Chaque expert a d'abord été un débutant.",
  "La persévérance est la mère du succès.",
  "Crois en toi et tu seras à mi-chemin.",
  "Le meilleur moment pour commencer était hier. Le deuxième meilleur moment, c'est maintenant.",
  "Ta seule limite, c'est toi-même.",
  "L'apprentissage est un trésor qui suivra son propriétaire partout.",
  "La réussite appartient à tout le monde. C'est au travail d'équipe qu'en revient le mérite.",
]

export function WelcomeCard({ firstName }: WelcomeCardProps) {
  const today = new Date()
  const formattedDate = new Intl.DateTimeFormat('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(today)

  // Get a consistent quote based on the day
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  )
  const quoteIndex = dayOfYear % quotes.length
  const dailyQuote = quotes[quoteIndex]

  return (
    <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              Bonjour {firstName} 👋
            </h1>
            <p className="text-muted-foreground mt-1 capitalize">{formattedDate}</p>
          </div>
          <div className="max-w-md">
            <p className="text-sm italic text-muted-foreground">
              &quot;{dailyQuote}&quot;
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
