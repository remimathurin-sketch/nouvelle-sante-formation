import { Metadata } from 'next'
import { LegalLayout } from '@/components/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de Confidentialité de Nouvelle Santé Formation - Collecte, utilisation et protection de vos données personnelles.',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout title="Politique de Confidentialité" lastUpdated="7 janvier 2026">
      <section>
        <h2 id="objet">1. Objet</h2>
        <p>
          La présente Politique de Confidentialité a pour objectif d&apos;informer les utilisateurs de
          la plateforme de formation Nouvelle Santé sur la manière dont leurs données personnelles
          sont collectées, utilisées, stockées et protégées, conformément au Règlement Général sur
          la Protection des Données (RGPD) et à la législation française en vigueur.
        </p>
      </section>

      <section>
        <h2 id="donnees-collectees">2. Données collectées</h2>
        <p>
          Dans le cadre de l&apos;inscription et de l&apos;utilisation des services, Nouvelle Santé peut
          être amenée à collecter les données suivantes :
        </p>
        <ul>
          <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse e-mail, adresse postale, numéro de téléphone.</li>
          <li><strong>Données de connexion :</strong> identifiants de connexion, journaux d&apos;activité sur la plateforme e-learning.</li>
          <li><strong>Données de formation :</strong> parcours suivis, résultats, échanges avec les formateurs.</li>
          <li><strong>Documents téléchargés ou transmis :</strong> fichiers fournis par l&apos;Apprenant dans le cadre de la formation (devoirs, livrets, justificatifs, etc.).</li>
          <li><strong>Données de facturation :</strong> coordonnées bancaires ou données nécessaires au règlement des formations (via des prestataires de paiement sécurisés).</li>
        </ul>
      </section>

      <section>
        <h2 id="finalites-traitement">3. Finalités de traitement</h2>
        <p>Les données collectées sont utilisées pour :</p>
        <ul>
          <li>Gérer les inscriptions et l&apos;accès aux formations.</li>
          <li>Fournir les contenus pédagogiques et assurer le suivi des apprenants.</li>
          <li>Gérer les paiements et la facturation.</li>
          <li>Respecter les obligations légales et réglementaires.</li>
          <li>Améliorer les services proposés (statistiques, évaluations, retours d&apos;expérience).</li>
        </ul>
      </section>

      <section>
        <h2 id="partage-donnees">4. Partage des données</h2>
        <p>
          Nouvelle Santé s&apos;engage à <strong>ne jamais vendre</strong> les données personnelles à des tiers.
        </p>
        <p>Les données peuvent toutefois être partagées avec :</p>
        <ul>
          <li>Les formateurs et intervenants impliqués dans le parcours de formation.</li>
          <li>Les prestataires techniques (hébergeur, service de messagerie, plateforme e-learning).</li>
          <li>Les organismes financeurs de la formation (ex : OPCO, Pôle emploi) lorsque cela est requis.</li>
          <li>Les autorités administratives ou judiciaires, en cas d&apos;obligation légale.</li>
        </ul>
      </section>

      <section>
        <h2 id="duree-conservation">5. Durée de conservation</h2>
        <p>
          Les données personnelles sont conservées uniquement pour la durée nécessaire aux
          finalités décrites ci-dessus, à savoir :
        </p>
        <ul>
          <li><strong>Données liées à la formation :</strong> 5 ans maximum après la fin du parcours.</li>
          <li><strong>Données de facturation :</strong> 10 ans (obligation légale comptable).</li>
          <li><strong>Documents déposés par l&apos;Apprenant :</strong> jusqu&apos;à la fin de la formation, sauf obligation légale contraire.</li>
        </ul>
      </section>

      <section>
        <h2 id="securite-donnees">6. Sécurité des données</h2>
        <p>
          Nouvelle Santé met en place toutes les mesures techniques et organisationnelles
          appropriées pour garantir la sécurité et la confidentialité des données personnelles,
          afin d&apos;éviter toute perte, vol, altération ou accès non autorisé.
        </p>
      </section>

      <section>
        <h2 id="droits-utilisateurs">7. Droits des utilisateurs</h2>
        <p>Conformément au RGPD, chaque utilisateur dispose des droits suivants :</p>
        <ul>
          <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que des données personnelles le concernant sont traitées.</li>
          <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes.</li>
          <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de ses données, sauf obligation légale de conservation.</li>
          <li><strong>Droit à la limitation :</strong> demander la suspension temporaire du traitement.</li>
          <li><strong>Droit à la portabilité :</strong> recevoir ses données dans un format structuré et lisible.</li>
          <li><strong>Droit d&apos;opposition :</strong> s&apos;opposer à certains traitements, notamment à des fins de prospection.</li>
        </ul>
        <p>Pour exercer ces droits, l&apos;Apprenant peut contacter Nouvelle Santé à l&apos;adresse suivante :</p>
        <p>
          <a href="mailto:contact@nouvellesanteformation.fr">contact@nouvellesanteformation.fr</a>
        </p>
      </section>

      <section>
        <h2 id="cookies-traceurs">8. Cookies et traceurs</h2>
        <p>Le site Nouvelle Santé utilise des cookies et traceurs afin de :</p>
        <ul>
          <li>Faciliter la navigation et l&apos;authentification.</li>
          <li>Mesurer la fréquentation et l&apos;utilisation des services.</li>
          <li>Améliorer l&apos;expérience utilisateur.</li>
        </ul>
        <p>
          L&apos;Apprenant peut gérer ses préférences en matière de cookies directement via les
          paramètres de son navigateur ou via le bandeau d&apos;information affiché lors de sa première visite.
        </p>
      </section>

      <section>
        <h2 id="sous-traitants-hebergement">9. Sous-traitants et hébergement</h2>
        <p>
          La plateforme e-learning et les données associées sont hébergées sur des serveurs
          situés dans l&apos;Union européenne.
        </p>
        <p>
          Tout transfert de données en dehors de l&apos;UE, si nécessaire, sera encadré par des
          garanties conformes au RGPD (clauses contractuelles types de la Commission européenne).
        </p>
      </section>

      <section>
        <h2 id="modification-politique">10. Modification de la politique</h2>
        <p>
          Nouvelle Santé se réserve le droit de modifier la présente Politique de Confidentialité
          afin de l&apos;adapter aux évolutions légales, réglementaires ou techniques.
        </p>
        <p>
          En cas de modification majeure, les utilisateurs seront informés par e-mail ou via la plateforme.
        </p>
      </section>

      <section>
        <h2 id="contact-reclamations">11. Contact et réclamations</h2>
        <p>
          Pour toute question ou réclamation relative à la présente Politique de Confidentialité,
          l&apos;Apprenant peut contacter :
        </p>
        <p>
          <a href="mailto:contact@nouvellesanteformation.fr">contact@nouvellesanteformation.fr</a>
        </p>
        <p>
          En cas de difficulté non résolue, l&apos;Apprenant peut saisir la CNIL (Commission Nationale
          de l&apos;Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
        </p>
      </section>
    </LegalLayout>
  )
}
