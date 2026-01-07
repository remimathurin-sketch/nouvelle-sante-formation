import { Metadata } from 'next'
import { CheckoutForm } from '@/components/checkout/CheckoutForm'
import { Shield, Award, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paiement VAE Aide-Soignant (DEAS) - Nouvelle Santé Formation',
  description:
    "Finalisez votre inscription à la formation VAE Aide-Soignant. Paiement sécurisé par Stripe.",
}

const garanties = [
  {
    icon: Shield,
    title: 'Paiement sécurisé',
    description: 'Transactions cryptées SSL via Stripe',
  },
  {
    icon: Award,
    title: 'Satisfait ou remboursé',
    description: '14 jours pour changer d\'avis',
  },
  {
    icon: Users,
    title: 'Accompagnement inclus',
    description: 'Un coach dédié tout au long du parcours',
  },
]

export default function PaymentAideSoignantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Left column - Form */}
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground">
                Finalise ton inscription
              </h1>
              <p className="mt-2 text-muted-foreground">
                VAE Aide-Soignant (DEAS) - Formation complète
              </p>
            </div>

            <CheckoutForm formation="aide-soignant" />
          </div>

          {/* Right column - Summary & Trust elements */}
          <div className="mt-12 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {/* Formation recap */}
              <div className="rounded-xl bg-white p-6 shadow-sm border">
                <h2 className="text-xl font-semibold mb-4">
                  Ce que tu vas recevoir
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Accès à la plateforme e-learning complète</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Accompagnement personnalisé avec un coach VAE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Préparation complète au Livret 1 et Livret 2</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Simulation d&apos;entretien avec le jury</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Accès à la communauté d&apos;apprenants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Fiches pratiques et ressources téléchargeables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Support par email et WhatsApp</span>
                  </li>
                </ul>
              </div>

              {/* Garanties */}
              <div className="space-y-4">
                {garanties.map((garantie, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-lg bg-white p-4 border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <garantie.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">
                        {garantie.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {garantie.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <img
                  src="https://stripe.com/img/v3/home/social.png"
                  alt="Stripe"
                  className="h-8 opacity-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
