"use client"

import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users } from "lucide-react"

const vaeAdvantages = [
  "Pas besoin de retourner à l'école",
  "Formation 100% à distance",
  "Valorise ton expérience professionnelle",
  "Diplôme identique à la formation initiale",
  "Reconnu par l'État et les employeurs",
  "Évolution de carrière facilitée",
]

const whoIsItFor = [
  "Aides à domicile avec expérience",
  "Auxiliaires de vie sans diplôme",
  "Aides-soignants en reconversion",
  "Professionnels du secteur médico-social",
  "Aidants familiaux",
  "Personnes en reconversion professionnelle",
]

const faqItems = [
  {
    question: "Qu'est-ce que la VAE exactement ?",
    answer: "La VAE (Validation des Acquis de l'Expérience) est un dispositif qui permet d'obtenir un diplôme en faisant reconnaître ton expérience professionnelle. Tu n'as pas besoin de retourner à l'école : tu prouves tes compétences à travers un dossier et un entretien oral.",
  },
  {
    question: "Combien de temps dure le parcours VAE ?",
    answer: "Le parcours dure généralement entre 6 et 12 mois, selon ton rythme et ta disponibilité. Avec notre accompagnement, la plupart de nos apprenants obtiennent leur diplôme en 8 mois en moyenne.",
  },
  {
    question: "Le diplôme VAE a-t-il la même valeur qu'un diplôme classique ?",
    answer: "Oui, absolument ! Le diplôme obtenu par VAE est strictement identique à celui obtenu par la formation initiale. Il est reconnu par l'État et a exactement la même valeur auprès des employeurs.",
  },
]

export function VAESection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Comprendre la VAE</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qu'est-ce que la VAE ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La Validation des Acquis de l'Expérience te permet d'obtenir un diplôme reconnu par l'État
            en valorisant ton expérience professionnelle.
          </p>
        </AnimatedSection>

        {/* Video placeholder */}
        <AnimatedSection className="mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-violet-600 flex items-center justify-center cursor-pointer hover:bg-violet-700 transition-colors">
                    <svg className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium">Découvre la VAE en vidéo</p>
                  <p className="text-gray-400 text-sm">2 min 30</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold">Les avantages de la VAE</h3>
              </div>
              <ul className="space-y-4">
                {vaeAdvantages.map((advantage) => (
                  <li key={advantage} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold">Pour qui ?</h3>
              </div>
              <ul className="space-y-4">
                {whoIsItFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-violet-600 text-sm">→</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ */}
        <AnimatedSection delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">Questions fréquentes sur la VAE</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 shadow-sm border-none"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
