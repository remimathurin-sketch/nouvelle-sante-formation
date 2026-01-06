"use client"

import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"

const stats = [
  {
    value: "100%",
    label: "Taux de satisfaction",
    description: "Nos apprenants recommandent notre formation",
  },
  {
    value: "500+",
    label: "Diplômés",
    description: "Depuis le lancement en 2020",
  },
  {
    value: "8",
    label: "Mois en moyenne",
    description: "Pour obtenir le diplôme",
  },
  {
    value: "95%",
    label: "Taux de réussite",
    description: "Au premier passage",
  },
]

export function ResultsSection() {
  return (
    <section className="py-20 bg-violet-600 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">Nos résultats</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-lg text-violet-100 max-w-2xl mx-auto">
            Mise à jour : Janvier 2026
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg font-medium mb-1">{stat.label}</p>
                <p className="text-sm text-violet-200">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
