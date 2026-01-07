import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, MessageCircle, Calendar, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Évaluation personnalisée requise - Nouvelle Santé Formation',
  description:
    "Ton expérience nécessite une évaluation personnalisée. Prends RDV pour un entretien gratuit de 30 min.",
}

const whatToExpect = [
  {
    icon: Clock,
    title: 'Entretien de 30 minutes',
    description: 'Un échange gratuit et sans engagement avec un conseiller',
  },
  {
    icon: CheckCircle,
    title: 'Évaluation de tes compétences',
    description: 'Nous analysons ton expérience pour voir si elle peut compenser la durée',
  },
  {
    icon: Calendar,
    title: 'Plan d\'action personnalisé',
    description: 'Tu repars avec des conseils concrets adaptés à ta situation',
  },
]

export default function EvaluationPersonnaliseePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
            <Calendar className="w-12 h-12 text-blue-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une évaluation personnalisée est recommandée
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            D&apos;après tes réponses, ton expérience est inférieure à 1 an.
            Mais ne t&apos;inquiète pas ! Selon la richesse de ton parcours, la VAE
            peut quand même être envisageable.
          </p>
        </div>

        {/* Explication */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Pourquoi une évaluation ?
          </h2>
          <p className="text-muted-foreground mb-4">
            La VAE requiert généralement <strong>1 an d&apos;expérience minimum</strong> (1607 heures).
            Cependant, ce n&apos;est pas qu&apos;une question de durée : la <strong>qualité et la diversité</strong> de
            ton expérience comptent aussi.
          </p>
          <p className="text-muted-foreground">
            Un entretien nous permettra d&apos;évaluer si tes compétences acquises peuvent
            justifier une démarche VAE, même avec une expérience plus courte.
          </p>
        </div>

        {/* What to expect */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Ce que nous allons faire ensemble
          </h2>

          <div className="space-y-4">
            {whatToExpect.map((item, index) => (
              <Card key={index}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary/5 rounded-xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Prends rendez-vous pour ton entretien gratuit
          </h2>
          <p className="text-muted-foreground mb-6">
            30 minutes pour faire le point sur ta situation et voir ensemble les options possibles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://wa.me/33XXXXXXXXX" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Prendre RDV sur WhatsApp
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg">
              <Link href="mailto:contact@nouvellesanteformation.fr">
                Nous écrire par email
              </Link>
            </Button>
          </div>
        </div>

        {/* Alternatives */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            En attendant, tu peux continuer à accumuler de l&apos;expérience.
            Chaque jour compte pour ton futur dossier !
          </p>
          <Button variant="ghost" asChild>
            <Link href="/">
              Retour à l&apos;accueil
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
