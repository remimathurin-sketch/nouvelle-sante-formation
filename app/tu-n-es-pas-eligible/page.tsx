import { Metadata } from 'next'
import Link from 'next/link'
import { XCircle, MessageCircle, BookOpen, Clock, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: "Tu n'es pas encore éligible - Nouvelle Santé Formation",
  description:
    "Tu n'es pas encore éligible à la VAE, mais ne te décourage pas. Découvre les alternatives pour atteindre ton objectif.",
}

const alternatives = [
  {
    icon: Clock,
    title: 'Accumule de l\'expérience',
    description:
      "Tu dois justifier d'au moins 1 an d'expérience. Continue à travailler dans le secteur et reviens nous voir !",
  },
  {
    icon: BookOpen,
    title: 'Explore les formations classiques',
    description:
      "Il existe des formations diplômantes pour devenir aide-soignant(e) ou auxiliaire de vie sans passer par la VAE.",
  },
  {
    icon: Heart,
    title: 'Fais du bénévolat',
    description:
      "L'expérience bénévole compte aussi ! Engage-toi auprès d'associations pour accumuler de l'expérience.",
  },
]

export default function NotEligiblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
            <XCircle className="w-12 h-12 text-gray-400" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu n&apos;es pas encore éligible
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            D&apos;après tes réponses, tu ne remplis pas encore les conditions pour
            accéder à la VAE. Mais ne te décourage pas, il existe des solutions !
          </p>
        </div>

        {/* Why not eligible */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Pourquoi ne suis-je pas éligible ?
          </h2>
          <p className="text-muted-foreground mb-4">
            Pour être éligible à la VAE, tu dois remplir ces conditions :
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              Avoir au moins <strong>1 an d&apos;expérience</strong> (1607 heures)
              dans le domaine
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              Pouvoir <strong>justifier cette expérience</strong> avec des
              documents
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">•</span>
              Avoir exercé des <strong>activités en rapport</strong> avec le
              diplôme visé
            </li>
          </ul>
        </div>

        {/* Alternatives */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Les alternatives pour toi :
          </h2>

          <div className="space-y-4">
            {alternatives.map((alt, index) => (
              <Card key={index}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <alt.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {alt.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {alt.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Tu as des questions ou tu penses que ta situation est particulière ?
            <br />
            N&apos;hésite pas à nous contacter pour en discuter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://wa.me/33XXXXXXXXX" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Nous contacter
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg">
              <Link href="/">Retour à l&apos;accueil</Link>
            </Button>
          </div>
        </div>

        {/* Encouragement */}
        <div className="mt-12 text-center p-6 bg-primary/5 rounded-xl">
          <p className="text-foreground font-medium mb-2">
            💪 Ce n&apos;est qu&apos;un &quot;pas encore&quot;
          </p>
          <p className="text-muted-foreground text-sm">
            De nombreuses personnes ont réussi leur VAE après avoir pris le
            temps d&apos;accumuler l&apos;expérience nécessaire. Ton parcours ne fait que
            commencer !
          </p>
        </div>
      </div>
    </div>
  )
}
