import { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions Générales de Vente de Nouvelle Santé Formation - Modalités d\'inscription, paiement et droit de rétractation.',
}

export default function CGVPage() {
  return (
    <LegalLayout title="Conditions Générales de Vente" lastUpdated="7 janvier 2026">
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
          Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les modalités
          et conditions dans lesquelles Nouvelle Santé, organisme de formation professionnelle,
          fournit à ses clients (ci-après « l&apos;Apprenant ») ses prestations de formation, notamment
          dans le cadre de l&apos;Accompagnement à la Validation des Acquis de l&apos;Expérience (VAE) –
          Diplôme d&apos;État d&apos;Aide-Soignant(e) (DEAS).
        </p>
        <p>
          Elles s&apos;appliquent à toute inscription à une formation proposée par Nouvelle Santé et
          prévalent sur tout autre document contradictoire.
        </p>
      </section>

      <section>
        <h2 id="inscription-paiement">2. Inscription et paiement</h2>

        <h3 id="validation-inscription">2.1 Validation de l&apos;inscription</h3>
        <p>
          L&apos;inscription à une formation est considérée comme définitive dès réception du paiement
          intégral ou du premier versement prévu par l&apos;échéancier contractuel.
        </p>

        <h3 id="modalites-paiement">2.2 Modalités de paiement</h3>
        <p>
          Le règlement est exigible dès l&apos;inscription. Le paiement peut être effectué par virement
          bancaire en une fois, carte bancaire ou par prélèvement automatique.
        </p>
      </section>

      <section>
        <h2 id="verification-documents">3. Vérification des documents et conditions d&apos;éligibilité</h2>

        <h3 id="controle-post-inscription">3.1 Contrôle post inscription</h3>
        <p>
          Après validation de l&apos;inscription et encaissement du paiement, Nouvelle Santé procède à la
          vérification des documents transmis par l&apos;Apprenant pour s&apos;assurer qu&apos;ils sont suffisants
          et conformes aux exigences réglementaires pour déposer un Livret 1 recevable.
        </p>

        <h3 id="non-conformite">3.2 Non-conformité des documents</h3>
        <p>
          Si les documents fournis sont jugés insuffisants ou non conformes, l&apos;Apprenant sera
          remboursé des sommes versées, déduction faite de frais fixes de traitement de
          <strong> 90 € TTC</strong> couvrant les frais administratifs engagés.
        </p>
      </section>

      <section>
        <h2 id="droit-retractation">4. Droit de rétractation</h2>

        <h3 id="delai-legal">4.1 Délai légal</h3>
        <p>
          Conformément aux dispositions des articles L.221-18 et suivants du Code de la consommation,
          l&apos;Apprenant dispose d&apos;un délai de <strong>14 jours calendaires</strong> à compter de la date
          de signature du contrat pour exercer son droit de rétractation, sans avoir à justifier de
          motifs ni à payer de pénalités.
        </p>

        <h3 id="modalites-exercice">4.2 Modalités d&apos;exercice</h3>
        <p>
          La rétractation doit être formulée par écrit (courrier recommandé avec accusé de réception
          ou courriel avec confirmation de lecture).
        </p>

        <h3 id="remboursement">4.3 Remboursement</h3>
        <p>
          En cas de rétractation dans les délais légaux, Nouvelle Santé procède au remboursement
          intégral des sommes versées dans un délai maximum de <strong>15 jours</strong> suivant la
          réception de la demande. Aucun frais de traitement n&apos;est appliqué dans ce cas.
        </p>
      </section>

      <section>
        <h2 id="annulation-cessation">5. Annulation ou cessation anticipée</h2>

        <h3 id="annulation-nouvelle-sante">5.1 Annulation à l&apos;initiative de Nouvelle Santé</h3>
        <p>
          En cas d&apos;annulation de la formation par Nouvelle Santé, l&apos;intégralité des sommes perçues
          sera remboursée, sans qu&apos;aucune autre indemnité ne puisse être réclamée par l&apos;Apprenant.
        </p>

        <h3 id="abandon-apprenant">5.2 Abandon par l&apos;Apprenant</h3>
        <p>
          En cas d&apos;abandon par l&apos;Apprenant pour un motif autre que la force majeure, les sommes
          correspondant aux prestations déjà réalisées resteront acquises à Nouvelle Santé.
        </p>
      </section>

      <section>
        <h2 id="mediation">6. Médiation</h2>
        <p>
          En cas de litige, l&apos;Apprenant est informé qu&apos;il peut recourir gratuitement au service
          d&apos;un médiateur de la consommation, conformément aux dispositions du Code de la consommation.
        </p>
        <p>Le médiateur désigné est :</p>
        <ul>
          <li><strong>MCP Médiation</strong></li>
          <li>Email : <a href="mailto:contact@mcpmediation.org">contact@mcpmediation.org</a></li>
          <li>Site internet : <a href="https://www.mcpmediation.org" target="_blank" rel="noopener noreferrer">www.mcpmediation.org</a></li>
        </ul>
      </section>

      <section>
        <h2 id="loi-applicable">7. Loi applicable et juridiction compétente</h2>
        <p>
          Les présentes CGV sont régies par le droit français.
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
