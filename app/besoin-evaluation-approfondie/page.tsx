import { Metadata } from 'next'
import Link from 'next/link'
import { Search, MessageCircle, ClipboardList, Target, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Évaluation approfondie nécessaire - Nouvelle Santé Formation',
  description:
    "Ton profil nécessite une évaluation approfondie pour déterminer le meilleur parcours VAE.",
}

const nextSteps = [
  {
    icon: ClipboardList,
    title: 'Analyse détaillée de ton parcours',
    description: 'Nous passons en revue toutes tes expériences professionnelles et personnelles',
  },
  {
    icon: Target,
    title: 'Identification des compétences transférables',
    description: 'Même si ton expérience semble différente, certaines compétences peuvent être valorisées',
  },
  {
    icon: Search,
    title: 'Orientation vers le bon diplôme',
    description: 'DEAS, DEAES, ou autre parcours ? Nous trouvons ce qui correspond le mieux',
  },
]

export default function EvaluationApprofondiePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-100 mb-6">
            <Search className="w-12 h-12 text-amber-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ton profil mérite une analyse approfondie
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            D&apos;après tes réponses, ton expérience ne correspond que partiellement
            aux activités attendues pour la VAE. Mais tout n&apos;est pas perdu !
            Une évaluation approfondie nous permettra d&apos;identifier les meilleures options.
          </p>
        </div>

        {/* Explication */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Pourquoi cette analyse ?
          </h2>
          <p className="text-muted-foreground mb-4">
            La VAE Aide-Soignant ou Auxiliaire de Vie requiert des compétences spécifiques :
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
            <li>Aide aux actes essentiels de la vie quotidienne (toilette, repas, habillage...)</li>
            <li>Accompagnement social et relationnel</li>
            <li>Travail en équipe pluriprofessionnelle</li>
          </ul>
          <p className="text-muted-foreground">
            Si ton expérience ne couvre pas ces domaines, nous pouvons explorer
            d&apos;autres pistes ou voir comment enrichir ton parcours.
          </p>
        </div>

        {/* Next steps */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Ce que nous allons faire ensemble
          </h2>

          <div className="space-y-4">
            {nextSteps.map((item, index) => (
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
            Échangeons sur ta situation
          </h2>
          <p className="text-muted-foreground mb-6">
            Un conseiller analysera ton parcours gratuitement et te proposera
            les meilleures options.
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
        <div className="text-center">
          <p className="text-muted-foreground">
            De nombreuses personnes ont réussi leur VAE après avoir réorienté leur projet.
            Nous sommes là pour t&apos;aider à trouver le chemin qui te correspond.
          </p>
          <Button variant="ghost" asChild className="mt-4">
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
