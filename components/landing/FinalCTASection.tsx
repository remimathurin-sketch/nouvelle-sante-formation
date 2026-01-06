"use client"

import { AnimatedSection } from "./AnimatedSection"
import { Button } from "@/components/ui/button"
import { MessageCircle, ClipboardCheck, ArrowRight } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tu veux en savoir plus ?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Échange avec notre équipe pour répondre à toutes tes questions
            et découvrir si la VAE est faite pour toi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50 text-lg px-8">
              <MessageCircle className="mr-2 h-5 w-5" />
              Échanger via le tchat
            </Button>
            <Link href="/deviens-aide-soignant-ou-auxiliaire-de-vie">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
                <ClipboardCheck className="mr-2 h-5 w-5" />
                Je passe le test d'éligibilité
              </Button>
            </Link>
          </div>

          <p className="text-violet-200 text-sm">
            Gratuit et sans engagement
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-16 grid md:grid-cols-3 gap-8 text-center" delay={0.2}>
          <div>
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Appelle-nous</h3>
            <p className="text-violet-200 text-sm">Du lundi au vendredi, 9h-18h</p>
          </div>
          <div>
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-3xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Chat en direct</h3>
            <p className="text-violet-200 text-sm">Réponse en moins de 5 minutes</p>
          </div>
          <div>
            <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-3xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-violet-200 text-sm">contact@nouvellesante.fr</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
