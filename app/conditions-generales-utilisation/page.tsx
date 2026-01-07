import { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Conditions Générales d\'Utilisation',
  description: 'Conditions Générales d\'Utilisation de Nouvelle Santé Formation - Accès aux services, utilisation des ressources et obligations.',
}

export default function CGUPage() {
  return (
    <LegalLayout title="Conditions Générales d'Utilisation" lastUpdated="7 janvier 2026">
      <p className="text-muted-foreground mb-6">
        La présente politique de confidentialité régit la manière dont le présent site internet
        recueille, utilise, conserve et divulgue les informations recueillies auprès des utilisateurs
        (individuellement appelé « Utilisateur ») du site internet (appelé « Site »). La présente
        politique de confidentialité s&apos;applique au Site et à tous les produits et services offerts
        par la société.
      </p>

      <section>
        <h2 id="objet">1. Objet</h2>
        <p>
          Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour objet de définir les
          modalités et conditions d&apos;accès et d&apos;utilisation des services en ligne proposés par
          Nouvelle Santé, notamment l&apos;accès aux contenus pédagogiques, aux ressources en ligne
          et aux services d&apos;accompagnement.
        </p>
        <p>
          Toute utilisation du site internet, de l&apos;espace e-learning ou des outils mis à disposition
          par Nouvelle Santé implique l&apos;acceptation sans réserve des présentes CGU.
        </p>
      </section>

      <section>
        <h2 id="acces-services">2. Accès aux services</h2>

        <h3 id="public-concerne">2.1 Public concerné</h3>
        <p>
          L&apos;accès aux contenus pédagogiques et aux espaces en ligne est réservé aux personnes
          inscrites à une formation et ayant réglé tout ou partie du montant dû, selon les modalités
          prévues au contrat de formation.
        </p>

        <h3 id="identifiants-personnels">2.2 Identifiants personnels</h3>
        <p>
          L&apos;Apprenant reçoit des identifiants personnels et confidentiels pour se connecter à
          l&apos;espace e-learning. Ces identifiants sont strictement personnels et ne doivent en
          aucun cas être communiqués à un tiers. Toute utilisation frauduleuse engage la
          responsabilité de l&apos;Apprenant.
        </p>
      </section>

      <section>
        <h2 id="utilisation-ressources">3. Utilisation des ressources</h2>

        <h3 id="droits-utilisation">3.1 Droits d&apos;utilisation</h3>
        <p>
          Les supports, vidéos, documents et contenus pédagogiques sont protégés par le droit
          d&apos;auteur et demeurent la propriété exclusive de Nouvelle Santé ou de ses partenaires.
        </p>
        <p>
          L&apos;Apprenant bénéficie d&apos;un droit d&apos;usage personnel et non exclusif. Toute reproduction,
          diffusion, modification ou commercialisation sans accord écrit préalable est interdite.
        </p>

        <h3 id="usage-conforme">3.2 Usage conforme</h3>
        <p>
          L&apos;Apprenant s&apos;engage à utiliser les ressources uniquement dans un but pédagogique et
          personnel, conformément à l&apos;objet de la formation suivie.
        </p>
      </section>

      <section>
        <h2 id="obligations-apprenant">4. Obligations de l&apos;Apprenant</h2>
        <p>L&apos;Apprenant s&apos;engage à :</p>
        <ul>
          <li>Respecter les règles de courtoisie dans les échanges avec les formateurs et les autres apprenants.</li>
          <li>Ne pas partager ses accès ou diffuser les contenus en dehors du cadre prévu.</li>
          <li>Disposer d&apos;un matériel et d&apos;une connexion internet adaptés pour suivre la formation.</li>
        </ul>
      </section>

      <section>
        <h2 id="responsabilites">5. Responsabilités</h2>

        <h3 id="responsabilite-nouvelle-sante">5.1 Responsabilité de Nouvelle Santé</h3>
        <p>
          Nouvelle Santé met en œuvre tous les moyens raisonnables pour assurer la disponibilité
          et la qualité de ses services, mais ne peut garantir une accessibilité continue,
          notamment en cas de maintenance ou d&apos;incidents techniques.
        </p>

        <h3 id="responsabilite-apprenant">5.2 Responsabilité de l&apos;Apprenant</h3>
        <p>
          L&apos;Apprenant est seul responsable de l&apos;utilisation qu&apos;il fait des ressources et des
          informations mises à disposition.
        </p>
      </section>

      <section>
        <h2 id="suspension-resiliation">6. Suspension ou résiliation d&apos;accès</h2>
        <p>
          En cas de non-respect des présentes CGU ou de comportement inapproprié, Nouvelle Santé
          se réserve le droit de suspendre ou de résilier l&apos;accès de l&apos;Apprenant à ses services,
          sans remboursement, après notification écrite.
        </p>
      </section>

      <section>
        <h2 id="donnees-personnelles">7. Données personnelles</h2>
        <p>
          Les données collectées lors de l&apos;inscription et de l&apos;utilisation des services sont
          traitées conformément à la réglementation en vigueur sur la protection des données
          personnelles (RGPD).
        </p>
        <p>
          L&apos;Apprenant dispose d&apos;un droit d&apos;accès, de rectification et de suppression de ses
          données en contactant : <a href="mailto:contact@nouvellesanteformation.fr">contact@nouvellesanteformation.fr</a>.
        </p>
      </section>

      <section>
        <h2 id="mediation">8. Médiation</h2>
        <p>
          En cas de litige, l&apos;Apprenant peut recourir gratuitement au médiateur de la consommation suivant :
        </p>
        <ul>
          <li><strong>MCP Médiation</strong></li>
          <li>Email : <a href="mailto:contact@mcpmediation.org">contact@mcpmediation.org</a></li>
          <li>Site : <a href="https://www.mcpmediation.org" target="_blank" rel="noopener noreferrer">www.mcpmediation.org</a></li>
        </ul>
      </section>

      <section>
        <h2 id="loi-applicable">9. Loi applicable et juridiction compétente</h2>
        <p>
          Les présentes CGU sont régies par le droit français.
        </p>
        <p>
          Tout litige relatif à l&apos;exécution ou à l&apos;interprétation des présentes, qui n&apos;aurait pas
          pu être réglé à l&apos;amiable ou par médiation, sera de la compétence exclusive du
          <strong> Tribunal de commerce de Paris</strong>, même en cas de pluralité de défendeurs ou
          d&apos;appel en garantie.
        </p>
      </section>
    </LegalLayout>
  )
}
