'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import {
  CheckCircle,
  Mail,
  Users,
  BookOpen,
  ArrowRight,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const nextSteps = [
  {
    icon: Mail,
    title: 'Email de confirmation',
    description: 'Tu vas recevoir un email avec tes accès dans quelques minutes',
  },
  {
    icon: BookOpen,
    title: 'Accès à la plateforme',
    description: 'Connecte-toi pour commencer ta formation',
  },
  {
    icon: Users,
    title: 'Rejoins la communauté',
    description: 'Échange avec les autres apprenants sur WhatsApp',
  },
]

export default function ThankYouAuxiliaireDeViePage() {
  const searchParams = useSearchParams()
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = useState(true)

  const sessionId = searchParams.get('session_id')
  const isFree = searchParams.get('free') === 'true'

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-background">
      {showConfetti && <Confetti width={width} height={height} recycle={false} />}

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tu y es presque... 🚀
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Félicitations ! Ton inscription à la formation VAE Auxiliaire de Vie
            (DEAES) est confirmée. Tu vas bientôt transformer ton expérience en
            diplôme !
          </p>
        </div>

        {/* What you'll receive */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">
              Ce que tu vas recevoir :
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Un email de confirmation avec tes identifiants</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Tes accès à la plateforme de formation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  Ton invitation à rejoindre la communauté (qui n&apos;attend plus que
                  toi !)
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Next steps */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-center">
            Prochaines étapes
          </h2>
          <div className="space-y-4">
            {nextSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button asChild size="lg">
            <Link href="https://wa.me/33XXXXXXXXX" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              Rejoins le groupe WhatsApp 👇
            </Link>
          </Button>

          <Button variant="outline" asChild size="lg">
            <Link href="/dashboard">
              Je commence ma formation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Order details */}
        {sessionId && (
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Détails de ta commande</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Parcours</dt>
                  <dd className="font-medium">VAE Auxiliaire de Vie (DEAES)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Numéro de commande</dt>
                  <dd className="font-mono text-xs">{sessionId.slice(0, 20)}...</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Statut</dt>
                  <dd className="text-green-600 font-medium">Payé ✓</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        )}

        {/* Support */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Une question ? Contacte-nous à{' '}
          <a
            href="mailto:contact@nouvellesanteformation.fr"
            className="text-primary underline"
          >
            contact@nouvellesanteformation.fr
          </a>
        </p>
      </div>
    </div>
  )
}
