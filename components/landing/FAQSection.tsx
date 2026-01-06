"use client"

import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
  {
    question: "Combien coûte la formation et comment la financer ?",
    answer: "La formation coûte 2 400€ TTC. Elle est éligible au CPF, au financement Pôle Emploi, et au financement employeur. Nous proposons également un paiement en 2 ou 3 fois sans frais. Notre équipe peut t'accompagner dans tes démarches de financement.",
  },
  {
    question: "Quelle est la durée de la formation ?",
    answer: "La durée moyenne est de 6 à 12 mois, selon ton rythme d'avancement. Tu as un accès illimité à la plateforme pendant 18 mois. La plupart de nos apprenants obtiennent leur diplôme en 8 mois.",
  },
  {
    question: "Faut-il avoir de l'expérience pour faire une VAE ?",
    answer: "Oui, il faut justifier d'au moins 1 an d'expérience (1607 heures) en rapport avec le diplôme visé. Cette expérience peut être salariée, bénévole ou acquise en tant qu'aidant familial.",
  },
  {
    question: "Comment se déroule l'accompagnement ?",
    answer: "Tu bénéficies d'un coach personnel qui t'accompagne tout au long de ton parcours. Tu as accès à la plateforme e-learning avec tous les modules, des webinaires réguliers, une communauté d'entraide, et des simulations d'oral avant le passage devant le jury.",
  },
  {
    question: "Le diplôme est-il reconnu partout ?",
    answer: "Oui, le diplôme obtenu par VAE est un diplôme d'État, strictement identique à celui obtenu par la formation initiale. Il est reconnu dans toute la France et par tous les employeurs du secteur.",
  },
  {
    question: "Que se passe-t-il si je ne réussis pas du premier coup ?",
    answer: "En cas de validation partielle, tu conserves les compétences validées pendant 5 ans. Nous t'accompagnons pour repasser uniquement les épreuves non validées. Notre taux de réussite au premier passage est de 95%.",
  },
  {
    question: "Puis-je suivre la formation tout en travaillant ?",
    answer: "Absolument ! La formation est 100% en ligne et tu avances à ton rythme. La plateforme est accessible 24h/24, 7j/7. Tu peux concilier ta formation avec ton activité professionnelle et ta vie personnelle.",
  },
  {
    question: "Comment m'inscrire ?",
    answer: "C'est simple ! Passe d'abord le test d'éligibilité gratuit sur notre site. Si tu es éligible, tu peux t'inscrire directement en ligne ou prendre rendez-vous avec un conseiller pour répondre à toutes tes questions.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que tu dois savoir avant de te lancer
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-gray-50 rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5">
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
