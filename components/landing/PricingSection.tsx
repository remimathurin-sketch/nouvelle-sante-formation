"use client"

import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Building2, Briefcase } from "lucide-react"
import Link from "next/link"

const pricingOptions = [
  {
    title: "VAE Aide-Soignant",
    subtitle: "DEAS",
    price: "2 400",
    description: "Formation complète pour obtenir le Diplôme d'État d'Aide-Soignant",
    features: [
      "Accès illimité à la plateforme",
      "Coach personnel dédié",
      "Préparation livret 2",
      "Simulation d'oral",
      "Communauté d'entraide",
      "Bonus : Formation PSC1",
    ],
    financing: ["CPF", "Pôle Emploi", "Employeur", "Paiement en 3x"],
    popular: true,
  },
  {
    title: "VAE Auxiliaire de Vie",
    subtitle: "DEAES",
    price: "2 400",
    description: "Formation complète pour le Diplôme d'Accompagnant Éducatif et Social",
    features: [
      "Accès illimité à la plateforme",
      "Coach personnel dédié",
      "Préparation livret 2",
      "Simulation d'oral",
      "Communauté d'entraide",
      "Bonus : Fiches pratiques",
    ],
    financing: ["CPF", "Pôle Emploi", "Employeur", "Paiement en 3x"],
    popular: false,
  },
  {
    title: "Parcours Pratique",
    subtitle: "Modules complémentaires",
    price: "490",
    description: "Modules de perfectionnement pour renforcer vos compétences",
    features: [
      "Module Hygiène",
      "Module Soins de base",
      "Module Prévention",
      "Fiches pratiques",
      "Accès 6 mois",
      "Certificat de formation",
    ],
    financing: ["CPF", "Paiement en 2x"],
    popular: false,
  },
]

const financingIcons = {
  CPF: CreditCard,
  "Pôle Emploi": Building2,
  Employeur: Briefcase,
  "Paiement en 3x": CreditCard,
  "Paiement en 2x": CreditCard,
}

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Tarifs & Financement</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Investis dans ton avenir
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plusieurs options de financement disponibles pour rendre ta formation accessible
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingOptions.map((option, index) => (
            <AnimatedSection key={option.title} delay={index * 0.1}>
              <Card className={`relative h-full ${option.popular ? 'border-violet-500 border-2 shadow-xl' : ''}`}>
                {option.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-violet-600 text-white">Le plus choisi</Badge>
                  </div>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-violet-600 font-medium">
                    {option.subtitle}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{option.price}€</span>
                    <span className="text-gray-500 ml-2">TTC</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 text-sm">{option.description}</p>

                  <ul className="space-y-3">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t">
                    <p className="text-xs text-gray-500 mb-3">Options de financement :</p>
                    <div className="flex flex-wrap gap-2">
                      {option.financing.map((finance) => (
                        <Badge key={finance} variant="outline" className="text-xs">
                          {finance}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/page-de-paiement-aide-soignant" className="block">
                    <Button className={`w-full ${option.popular ? 'bg-violet-600 hover:bg-violet-700' : ''}`}>
                      Choisir ce parcours
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <p className="text-gray-600">
            Des questions sur le financement ?{" "}
            <a href="#" className="text-violet-600 hover:underline font-medium">
              Contacte-nous
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
