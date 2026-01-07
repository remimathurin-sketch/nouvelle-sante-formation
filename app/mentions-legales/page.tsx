import { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de Nouvelle Santé Formation - Informations sur l\'éditeur du site, l\'hébergeur et les contacts.',
}

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales" lastUpdated="7 janvier 2026">
      <section>
        <h2 id="editeur">Éditeur du site</h2>
        <p>
          La société Nouvelle Santé (Nouvelle Santé Formation), SASU immatriculée au RCS de Paris
          sous le numéro 989 875 901, est éditrice du présent site.
        </p>
      </section>

      <section>
        <h2 id="informations-legales">Informations légales</h2>
        <ul>
          <li><strong>Raison sociale :</strong> NOUVELLE SANTE (NOUVELLE SANTE FORMATION)</li>
          <li><strong>Forme juridique :</strong> Société par actions simplifiée Unipersonnelle (SASU)</li>
          <li><strong>Capital social :</strong> 100,00 €</li>
          <li><strong>SIREN :</strong> 989 875 901</li>
          <li><strong>RCS :</strong> Paris</li>
          <li><strong>Siège social :</strong> 200 Rue de la Croix Nivert, 75 015 Paris, France</li>
          <li><strong>Email de contact :</strong> <a href="mailto:contact@nouvellesanteformation.fr">contact@nouvellesanteformation.fr</a></li>
        </ul>
      </section>

      <section>
        <h2 id="direction-publication">Direction de la publication</h2>
        <p>
          <strong>Directrice de la publication :</strong> Kelly Diakok, Présidente
        </p>
      </section>

      <section>
        <h2 id="hebergeur">Hébergeur</h2>
        <p>Le présent site est hébergé par :</p>
        <ul>
          <li><strong>Raison sociale :</strong> O2Switch</li>
          <li><strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France</li>
          <li><strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer">www.o2switch.fr</a></li>
        </ul>
      </section>

      <section>
        <h2 id="propriete-intellectuelle">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.)
          est la propriété exclusive de Nouvelle Santé Formation ou de ses partenaires et est protégé
          par les lois françaises et internationales relatives à la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
          des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite,
          sauf autorisation écrite préalable de Nouvelle Santé Formation.
        </p>
      </section>

      <section>
        <h2 id="donnees-personnelles">Données personnelles</h2>
        <p>
          Pour plus d&apos;informations sur la collecte et le traitement de vos données personnelles,
          veuillez consulter notre{' '}
          <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
        </p>
      </section>

      <section>
        <h2 id="contact">Contact</h2>
        <p>
          Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
        </p>
        <ul>
          <li><strong>Par email :</strong> <a href="mailto:contact@nouvellesanteformation.fr">contact@nouvellesanteformation.fr</a></li>
          <li><strong>Par courrier :</strong> Nouvelle Santé Formation, 200 Rue de la Croix Nivert, 75 015 Paris, France</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
