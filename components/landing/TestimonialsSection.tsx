"use client"

import { useState } from "react"
import { AnimatedSection } from "./AnimatedSection"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    role: "Aide-soignante diplômée",
    image: "👩",
    rating: 5,
    text: "Grâce à Nouvelle Santé Formation, j'ai pu valider mon DEAS en 6 mois. L'accompagnement était top et la communauté m'a beaucoup aidée. Je recommande à 100% !",
    date: "Diplômée en 2024",
  },
  {
    name: "Sophie L.",
    role: "Auxiliaire de vie diplômée",
    image: "👩‍🦰",
    rating: 5,
    text: "Après 10 ans d'expérience sans diplôme, j'ai enfin pu obtenir mon DEAES. Le coach m'a accompagnée à chaque étape et j'ai réussi du premier coup !",
    date: "Diplômée en 2024",
  },
  {
    name: "Fatou M.",
    role: "Aide-soignante diplômée",
    image: "👩🏾",
    rating: 5,
    text: "La plateforme est vraiment bien faite, on peut avancer à son rythme. Les simulations d'oral m'ont permis d'arriver sereine le jour J. Merci à toute l'équipe !",
    date: "Diplômée en 2023",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <Badge className="mb-4 bg-violet-100 text-violet-700">Témoignages</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Elles ont réussi, pourquoi pas toi ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvre les parcours de nos diplômées
          </p>
        </AnimatedSection>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-violet-200 mb-4" />
                  <p className="text-gray-600 mb-6">{testimonial.text}</p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-violet-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <AnimatedSection>
            <Card>
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-violet-200 mb-4" />
                <p className="text-gray-600 mb-6">{testimonials[currentIndex].text}</p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-violet-100 flex items-center justify-center text-2xl">
                    {testimonials[currentIndex].image}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-violet-600">{testimonials[currentIndex].role}</p>
                    <p className="text-xs text-gray-500">{testimonials[currentIndex].date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center gap-4 mt-6">
              <Button variant="outline" size="icon" onClick={prevTestimonial}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-violet-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={nextTestimonial}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
