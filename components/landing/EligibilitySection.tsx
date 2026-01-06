"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./AnimatedSection"
import { Check, ClipboardCheck } from "lucide-react"
import Link from "next/link"

const criteria = [
  {
    title: "Tu as de l'expérience",
    description: "Tu travailles ou as travaillé dans le secteur de la santé, de l'aide à la personne ou du social depuis au moins 1 an.",
  },
  {
    title: "Tu veux un diplôme reconnu",
    description: "Tu souhaites obtenir un diplôme d'État pour valoriser ton parcours et évoluer professionnellement.",
  },
  {
    title: "Tu veux te former à ton rythme",
    description: "Tu préfères une formation 100% en ligne, flexible, que tu peux suivre depuis chez toi.",
  },
]

export function EligibilitySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cette formation est 100% faite pour toi si :
          </h2>
          <p className="text-lg text-violet-100 max-w-2xl mx-auto">
            Découvre si tu es éligible à la VAE en moins de 2 minutes
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {criteria.map((criterion, index) => (
            <AnimatedSection key={criterion.title} delay={index * 0.1}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full">
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{criterion.title}</h3>
                <p className="text-violet-100">{criterion.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center" delay={0.3}>
          <Link href="/deviens-aide-soignant-ou-auxiliaire-de-vie">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-violet-50">
              <ClipboardCheck className="mr-2 h-5 w-5" />
              Je passe le test d'éligibilité
            </Button>
          </Link>
          <p className="mt-4 text-sm text-violet-200">
            Gratuit et sans engagement - Résultat immédiat
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
