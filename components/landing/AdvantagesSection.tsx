"use client"

import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  Monitor,
  MessageSquare,
  Mic,
  FileText,
  Gift,
  CheckCircle,
} from "lucide-react"

const advantages = [
  {
    icon: Users,
    title: "Coaching personnalisé",
    description: "Un accompagnateur dédié qui te suit tout au long de ton parcours",
  },
  {
    icon: Monitor,
    title: "Plateforme e-learning",
    description: "Accès illimité à tous les modules, vidéos et ressources pédagogiques",
  },
  {
    icon: MessageSquare,
    title: "Communauté active",
    description: "Rejoins un groupe de futurs diplômés pour échanger et s'entraider",
  },
  {
    icon: Mic,
    title: "Préparation à l'oral",
    description: "Simulations d'entretiens et conseils pour réussir le jour J",
  },
  {
    icon: FileText,
    title: "Aide administrative",
    description: "On t'accompagne dans toutes les démarches : dossier, financement, inscription",
  },
  {
    icon: Gift,
    title: "Bonus inclus",
    description: "Formation PSC1, fiches pratiques, modèles de livret 2 et plus encore",
  },
]

export function AdvantagesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Nos avantages</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tout ce qu'il faut pour réussir !
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un accompagnement complet pour maximiser tes chances de succès
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AnimatedSection key={advantage.title} delay={index * 0.05}>
              <div className="flex gap-4 p-6 rounded-xl hover:bg-violet-50 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <advantage.icon className="h-6 w-6 text-violet-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 p-8 bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl text-white" delay={0.3}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <CheckCircle className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-semibold">Satisfait ou remboursé</h3>
                <p className="text-violet-100">14 jours pour changer d'avis, sans justification</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-violet-100">de satisfaction</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
