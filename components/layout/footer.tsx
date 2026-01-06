import Link from 'next/link'

const footerLinks = {
  formations: [
    { name: 'VAE Aide-Soignant', href: '/formations/aide-soignant' },
    { name: 'VAE Auxiliaire de Vie', href: '/formations/auxiliaire-de-vie' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGV', href: '/conditions-generales-de-vente' },
    { name: 'CGU', href: '/conditions-generales-utilisation' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">Nouvelle Santé</span>
              <span className="text-lg font-light">Formation</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Transformez votre expérience en diplôme reconnu par l&apos;État grâce à la VAE.
            </p>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-sm font-semibold">Formations</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.formations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">Légal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:contact@nouvelle-sante-formation.fr"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  contact@nouvelle-sante-formation.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nouvelle Santé Formation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
