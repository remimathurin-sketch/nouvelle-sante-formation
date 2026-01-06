"use client"

import { useState } from "react"
import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, FileCheck, GraduationCap, Users } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileCheck,
    title: "Test d'éligibilité",
    description: "Réponds à quelques questions pour vérifier ton éligibilité à la VAE. C'est gratuit et ça prend moins de 2 minutes.",
    details: [
      "Analyse de ton expérience",
      "Vérification des prérequis",
      "Résultat immédiat",
    ],
  },
  {
    number: "02",
    icon: Users,
    title: "Accompagnement personnalisé",
    description: "Un coach dédié t'accompagne tout au long de ton parcours. Tu n'es jamais seul(e) !",
    details: [
      "Coach personnel attitré",
      "Accès à la communauté",
      "Suivi régulier de ta progression",
    ],
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Obtention du diplôme",
    description: "Prépare ton dossier et ton oral avec nos experts. Le jour J, tu es prêt(e) à décrocher ton diplôme !",
    details: [
      "Préparation du livret 2",
      "Simulation d'oral",
      "Diplôme d'État reconnu",
    ],
  },
]

export function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Comment ça marche</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            3 étapes vers ton diplôme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un parcours simple et accompagné pour transformer ton expérience en diplôme
          </p>
        </AnimatedSection>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.1}>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="absolute -top-4 left-8">
                  <span className="text-5xl font-bold text-violet-200">{step.number}</span>
                </div>
                <div className="pt-8">
                  <div className="h-14 w-14 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                    <step.icon className="h-7 w-7 text-violet-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-1.5 w-1.5 rounded-full bg-violet-500"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-8 w-8 text-violet-300" />
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <span className="text-5xl font-bold text-violet-200">{steps[currentStep].number}</span>
              </div>
              <div className="pt-8">
                <div className="h-14 w-14 rounded-xl bg-violet-100 flex items-center justify-center mb-4">
                  {(() => {
                    const Icon = steps[currentStep].icon
                    return <Icon className="h-7 w-7 text-violet-600" />
                  })()}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{steps[currentStep].title}</h3>
                <p className="text-gray-600 mb-4">{steps[currentStep].description}</p>
                <ul className="space-y-2">
                  {steps[currentStep].details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-violet-500"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevStep}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentStep ? "bg-violet-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextStep}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
