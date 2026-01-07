import { Metadata } from 'next'
import Link from 'next/link'
import { AlertCircle, MessageCircle, ArrowRight, FileText, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Éligible sous conditions - Nouvelle Santé Formation',
  description:
    "Tu es potentiellement éligible à la VAE, mais certaines conditions doivent être remplies. Découvre les prochaines étapes.",
}

const conditions = [
  {
    icon: FileText,
    title: 'Rassemble tes justificatifs',
    description:
      "Bulletins de salaire, attestations employeur, certificats de travail... Nous t'aiderons à identifier les documents nécessaires.",
  },
  {
    icon: Clock,
    title: "Vérifie ton expérience",
    description:
      "Tu dois justifier d'au moins 1 an d'expérience (1607 heures) en rapport avec le diplôme visé.",
  },
]

export default function EligibleConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
            <AlertCircle className="w-12 h-12 text-amber-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu es éligible sous conditions
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            D&apos;après tes réponses, tu pourrais être éligible à la VAE, mais
            certains éléments doivent être vérifiés.
          </p>
        </div>

        {/* Conditions */}
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Ce qu&apos;il te faut pour être éligible :
          </h2>

          {conditions.map((condition, index) => (
            <Card key={index}>
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <condition.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {condition.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {condition.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next steps */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Prochaines étapes
          </h2>
          <ol className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                1
              </span>
              <span>Échange avec un conseiller pour valider ton éligibilité</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                2
              </span>
              <span>Rassemble les documents manquants avec notre aide</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-sm flex items-center justify-center">
                3
              </span>
              <span>Inscris-toi à la formation une fois les conditions remplies</span>
            </li>
          </ol>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="https://wa.me/33XXXXXXXXX" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Échanger avec un conseiller
            </Link>
          </Button>

          <Button variant="outline" asChild size="lg">
            <Link href="/tu-es-eligible">
              Voir les parcours disponibles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Encouragement */}
        <p className="text-center text-muted-foreground mt-10 text-sm">
          Ne te décourage pas ! De nombreux candidats ont réussi leur VAE après
          avoir rassemblé les bons documents. Nous sommes là pour t&apos;aider.
        </p>
      </div>
    </div>
  )
}
