import { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, MessageCircle, Clock, FileText, Users, GraduationCap, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'VAE difficile mais possible - Nouvelle Santé Formation',
  description:
    "La VAE sera plus complexe dans ta situation, mais reste possible avec un accompagnement renforcé.",
}

const challenges = [
  {
    icon: FileText,
    title: 'Reconstitution détaillée',
    description: 'Sans traces écrites, nous devrons reconstituer ton parcours de mémoire avec précision',
  },
  {
    icon: Clock,
    title: 'Délai plus long',
    description: 'Le processus prendra plus de temps pour compenser le manque de documentation',
  },
  {
    icon: Users,
    title: 'Accompagnement renforcé',
    description: 'Un coaching intensif sera nécessaire pour préparer ton dossier',
  },
]

const alternatives = [
  {
    icon: GraduationCap,
    title: 'Formation courte puis VAE',
    description: 'Une formation complémentaire peut te permettre de consolider ton dossier et tes compétences',
  },
]

export default function VaeDifficilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 mb-6">
            <AlertTriangle className="w-12 h-12 text-orange-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            VAE possible, mais avec des défis
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soyons honnêtes : sans justificatifs ni traces de ton activité,
            la VAE sera plus difficile. Mais elle reste possible avec un
            accompagnement adapté.
          </p>
        </div>

        {/* Challenges */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Les défis à relever
          </h2>

          <div className="space-y-4">
            {challenges.map((item, index) => (
              <Card key={index}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-orange-600" />
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

        {/* Ce qu'on peut faire */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Ce que nous pouvons faire
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <span>Reconstituer ton parcours étape par étape avec notre accompagnement</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <span>Contacter tes anciens employeurs pour obtenir des attestations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">3.</span>
              <span>Collecter des témoignages de collègues ou bénéficiaires</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">4.</span>
              <span>Préparer intensivement ton oral pour compenser le dossier</span>
            </li>
          </ul>
        </div>

        {/* Alternatives */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Alternative à considérer
          </h2>

          {alternatives.map((item, index) => (
            <Card key={index} className="bg-primary/5 border-primary/20">
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

        {/* CTA */}
        <div className="bg-primary/5 rounded-xl p-8 text-center mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Parlons de ta situation
          </h2>
          <p className="text-muted-foreground mb-6">
            Chaque parcours est unique. Échangeons pour trouver la meilleure
            stratégie dans ton cas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="https://wa.me/33XXXXXXXXX" target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Échanger sur WhatsApp
              </Link>
            </Button>

            <Button variant="outline" asChild size="lg">
              <Link href="mailto:contact@nouvellesanteformation.fr">
                Nous écrire par email
              </Link>
            </Button>
          </div>
        </div>

        {/* Encouragement */}
        <div className="text-center p-6 bg-green-50 rounded-xl">
          <p className="text-foreground font-medium mb-2">
            💪 Ce n&apos;est pas impossible !
          </p>
          <p className="text-muted-foreground text-sm">
            Des candidats dans ta situation ont réussi leur VAE.
            Avec de la motivation et un bon accompagnement, tout est possible.
          </p>
        </div>

        <div className="text-center mt-6">
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
