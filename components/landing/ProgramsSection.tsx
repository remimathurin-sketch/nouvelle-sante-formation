"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./AnimatedSection"
import { Stethoscope, Heart, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    icon: Stethoscope,
    title: "VAE Aide-Soignant",
    subtitle: "DEAS",
    description: "Obtenez le Diplôme d'État d'Aide-Soignant en valorisant votre expérience professionnelle dans le secteur de la santé.",
    features: ["Diplôme reconnu par l'État", "Formation 100% en ligne", "Accompagnement personnalisé"],
    color: "violet",
    popular: true,
  },
  {
    icon: Heart,
    title: "VAE Auxiliaire de Vie",
    subtitle: "DEAES",
    description: "Validez vos acquis et obtenez le Diplôme d'État d'Accompagnant Éducatif et Social pour exercer légalement.",
    features: ["Diplôme reconnu par l'État", "3 spécialités possibles", "Financement CPF"],
    color: "pink",
    popular: false,
  },
  {
    icon: BookOpen,
    title: "Parcours Pratique",
    subtitle: "Hygiène, soins, prévention",
    description: "Renforcez vos compétences pratiques avec nos modules spécialisés : hygiène, soins de base et prévention.",
    features: ["Modules à la carte", "Fiches pratiques", "Certification incluse"],
    color: "purple",
    popular: false,
  },
]

export function ProgramsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Nos formations</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choisis ton parcours vers le diplôme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trois parcours adaptés à ton profil et tes objectifs professionnels
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <AnimatedSection key={program.title} delay={index * 0.1}>
              <Card className={`relative h-full hover:shadow-xl transition-shadow duration-300 ${program.popular ? 'border-violet-500 border-2' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-violet-600 text-white">Le plus populaire</Badge>
                  </div>
                )}
                <CardHeader className="pt-8">
                  <div className={`h-14 w-14 rounded-xl bg-${program.color}-100 flex items-center justify-center mb-4`}>
                    <program.icon className={`h-7 w-7 text-${program.color}-600`} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-violet-600 font-medium">
                    {program.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-green-600 text-xs">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/deviens-aide-soignant-ou-auxiliaire-de-vie">
                    <Button className="w-full mt-4 bg-violet-600 hover:bg-violet-700">
                      Voir le programme complet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
