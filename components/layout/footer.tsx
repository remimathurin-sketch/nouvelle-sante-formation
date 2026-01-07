import Link from 'next/link'
import { Instagram, Music2, Mail, Heart } from 'lucide-react'

const footerLinks = {
  formations: [
    { name: 'VAE Aide-Soignant (DEAS)', href: '/formations/aide-soignant' },
    { name: 'VAE Auxiliaire de Vie (DEAES)', href: '/formations/auxiliaire-de-vie' },
    { name: 'Parcours pratique', href: '/formations/parcours-pratique' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/conditions-generales-de-vente' },
    { name: 'CGU', href: '/conditions-generales-utilisation' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  ],
}

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/nouvellesanteformation',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@nouvellesanteformation',
    icon: Music2,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* À propos */}
          <div>
            <Link href="/" className="flex items-center gap-2" aria-label="Accueil">
              <span className="text-lg font-bold text-primary">Nouvelle Santé</span>
              <span className="text-lg font-light">Formation</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transformez votre expérience en diplôme reconnu par l&apos;État grâce à la VAE.
              Accompagnement personnalisé, plateforme e-learning et communauté bienveillante.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>+500 diplômés</strong> depuis 2020
            </p>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-sm font-semibold" id="footer-formations">Formations</h3>
            <ul className="mt-4 space-y-3" aria-labelledby="footer-formations">
              {footerLinks.formations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold" id="footer-legal">Légal</h3>
            <ul className="mt-4 space-y-3" aria-labelledby="footer-legal">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold" id="footer-contact">Contact</h3>
            <ul className="mt-4 space-y-3" aria-labelledby="footer-contact">
              <li>
                <a
                  href="mailto:contact@nouvellesante.fr"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  contact@nouvellesante.fr
                </a>
              </li>
            </ul>

            {/* Réseaux sociaux */}
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Suivez-nous</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-white"
                    aria-label={`Suivez-nous sur ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Nouvelle Santé Formation. Tous droits réservés.
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Fait avec <Heart className="h-4 w-4 fill-red-500 text-red-500" /> pour nos apprenants
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
