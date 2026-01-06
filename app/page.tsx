import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <Badge className="mb-4 w-fit" variant="secondary">
                Formation éligible CPF
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Et si ton expérience te permettait de décrocher un{' '}
                <span className="text-primary">diplôme reconnu par l&apos;État</span> ?
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Transforme tes années d&apos;expérience dans le secteur de la santé en diplôme
                officiel grâce à la VAE. Accompagnement personnalisé, plateforme e-learning et
                communauté de soutien.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/deviens-aide-soignant-ou-auxiliaire-de-vie">
                    Je passe le test d&apos;éligibilité
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="https://wa.me/33600000000">Échanger via le tchat</Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Image Placeholder */}
            <div className="relative hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="formations" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nos programmes</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choisissez le parcours qui correspond à votre expérience
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">VAE Aide-Soignant (DEAS)</h3>
              <p className="mt-2 text-muted-foreground">
                Obtenez le Diplôme d&apos;État d&apos;Aide-Soignant en validant votre expérience
                professionnelle.
              </p>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link href="/formations/aide-soignant">En savoir plus</Link>
              </Button>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">VAE Auxiliaire de Vie (DEAES)</h3>
              <p className="mt-2 text-muted-foreground">
                Obtenez le Diplôme d&apos;État d&apos;Accompagnant Éducatif et Social.
              </p>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link href="/formations/auxiliaire-de-vie">En savoir plus</Link>
              </Button>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border bg-card p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Parcours pratique</h3>
              <p className="mt-2 text-muted-foreground">
                Hygiène, soins, prévention - Modules complémentaires pour renforcer vos compétences.
              </p>
              <Button className="mt-6 w-full" variant="outline" asChild>
                <Link href="/formations/parcours-pratique">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-secondary/30 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cette formation est 100% faite pour toi si :
            </h2>
            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-lg">
                  Tu as au moins 1 an d&apos;expérience dans le secteur de la santé ou de
                  l&apos;aide à la personne
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-lg">
                  Tu veux valoriser tes compétences avec un diplôme reconnu
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-lg">
                  Tu cherches un accompagnement personnalisé et flexible
                </span>
              </li>
            </ul>
            <Button size="lg" className="mt-10" asChild>
              <Link href="/deviens-aide-soignant-ou-auxiliaire-de-vie">
                Je passe le test d&apos;éligibilité
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
