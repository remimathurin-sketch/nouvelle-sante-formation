import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, GraduationCap, Building2, ArrowRight, Users, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Tu es éligible avec accompagnement - Nouvelle Santé Formation',
  description:
    "Tu es éligible à la VAE ! Un accompagnement est recommandé pour constituer ton dossier. Choisis ton parcours.",
}

const parcours = [
  {
    title: 'Aide-Soignant(e)',
    diplome: 'DEAS',
    description: 'Si tu travailles en établissement',
    details: '(EHPAD, clinique, hôpital...)',
    price: '2 400',
    href: '/page-de-paiement-aide-soignant',
    icon: Building2,
  },
  {
    title: 'Auxiliaire de Vie',
    diplome: 'DEAES',
    description: 'Si tu accompagnes des personnes à domicile',
    details: '',
    price: '2 000',
    href: '/page-de-paiement-auxiliaire-de-vie',
    icon: GraduationCap,
  },
]

const accompagnementInclus = [
  {
    icon: FileText,
    title: 'Constitution du dossier',
    description: "Nous t'aidons à rassembler et organiser tous tes justificatifs",
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    description: "Un coach dédié pour t'accompagner tout au long du parcours",
  },
]

export default function EligibleAccompagnementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu es éligible avec accompagnement ! ✅
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            D&apos;après tes réponses, tu es éligible à la VAE. Tes justificatifs
            étant incomplets, un accompagnement renforcé est recommandé pour
            constituer ton dossier.
          </p>
        </div>

        {/* Ce qui est inclus */}
        <div className="bg-white rounded-xl border p-6 mb-10">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            Ce qui est inclus dans ton accompagnement
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {accompagnementInclus.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
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
              </div>
            ))}
          </div>
        </div>

        {/* Parcours Cards */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-foreground mb-6 text-center">
            Choisis ton parcours
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {parcours.map((p) => (
            <Card
              key={p.diplome}
              className="relative overflow-hidden border-2 hover:border-primary transition-colors"
            >
              <CardHeader className="text-center pb-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mx-auto mb-3">
                  <p.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  {p.diplome}
                </span>
              </CardHeader>

              <CardContent className="text-center">
                <p className="text-muted-foreground mb-1">{p.description}</p>
                {p.details && (
                  <p className="text-sm text-muted-foreground">{p.details}</p>
                )}

                <div className="mt-6 mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {p.price} €
                  </span>
                  <span className="text-muted-foreground ml-1">TTC</span>
                </div>

                <div className="text-left space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">
                    Options de financement :
                  </p>
                  <ul className="space-y-1">
                    <li>• CPF (prochainement)</li>
                    <li>• Pôle Emploi</li>
                    <li>• Employeur</li>
                    <li>• Paiement en plusieurs fois</li>
                  </ul>
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full" size="lg">
                  <Link href={p.href}>
                    Je veux ce parcours 🤩
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Questions */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Tu as des questions sur l&apos;accompagnement ?
          </p>
          <Button variant="outline" asChild>
            <Link href="https://wa.me/33XXXXXXXXX" target="_blank">
              Échanger avec un conseiller
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
