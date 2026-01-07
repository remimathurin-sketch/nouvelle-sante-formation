import { QuizQuestion } from './types'

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "As-tu déjà accompagné, aidé ou soutenu des personnes en perte d'autonomie (emploi, bénévolat, stage ...) ?",
    type: 'single',
    options: [
      { id: '1-yes', label: 'Oui', emoji: '✅', value: 'yes' },
      { id: '1-no', label: 'Non', emoji: '❌', value: 'no' },
    ],
  },
  {
    id: 2,
    question: "Combien d'années d'expérience cumulée as-tu ?",
    type: 'single',
    options: [
      { id: '2-less-6months', label: 'Moins de 6 mois', emoji: '⏱️', value: 'less-6months' },
      { id: '2-6months-1year', label: '6 mois à 1 an', emoji: '📆', value: '6months-1year' },
      { id: '2-1year-plus', label: '1 an et plus (1607h minimum)', emoji: '✅', value: '1year-plus' },
      { id: '2-3years-plus', label: 'Plus de 3 ans', emoji: '💪', value: '3years-plus' },
    ],
  },
  {
    id: 3,
    question: "Ton expérience est-elle en lien avec ces activités ?",
    description: "Aide aux actes essentiels (toilette, repas, habillage...), accompagnement social et relationnel, travail en équipe pluriprofessionnelle",
    type: 'single',
    options: [
      { id: '3-yes', label: 'Oui, mon expérience couvre ces activités', emoji: '✅', value: 'yes' },
      { id: '3-partial', label: 'Partiellement, certaines activités seulement', emoji: '⚠️', value: 'partial' },
      { id: '3-no', label: 'Non, mon expérience est différente', emoji: '❌', value: 'no' },
    ],
  },
  {
    id: 4,
    question: "As-tu des justificatifs officiels de ton expérience ?",
    description: "Contrats de travail, fiches de paie, attestations employeur, certificats de travail...",
    type: 'single',
    options: [
      { id: '4-yes-complete', label: 'Oui, j\'ai des justificatifs complets', emoji: '📄', value: 'yes-complete' },
      { id: '4-yes-partial', label: 'Oui, mais incomplets', emoji: '📑', value: 'yes-partial' },
      { id: '4-no', label: 'Non, je n\'en ai pas', emoji: '😬', value: 'no' },
    ],
  },
  {
    id: 5,
    question: "As-tu conservé des traces de ton activité ?",
    description: "Cahiers de liaison, plannings, fiches d'intervention, témoignages, photos...",
    type: 'single',
    options: [
      { id: '5-many', label: 'Oui, plusieurs documents', emoji: '🗂️', value: 'many' },
      { id: '5-some', label: 'Oui, quelques-uns', emoji: '📑', value: 'some' },
      { id: '5-none', label: 'Non, rien de tout cela', emoji: '❌', value: 'none' },
    ],
  },
  {
    id: 6,
    question: "Quel(s) poste(s) as-tu occupé(s) ?",
    type: 'multiple',
    options: [
      { id: '6-avs', label: 'Auxiliaire de vie sociale (AVS)', emoji: '👩‍⚕️', value: 'avs' },
      { id: '6-advf', label: 'Assistant(e) de vie aux familles (ADVF)', emoji: '🏡', value: 'advf' },
      { id: '6-aide-domicile', label: 'Aide à domicile', emoji: '🧽', value: 'aide-domicile' },
      { id: '6-aide-menager', label: 'Aide-ménager(ère)', emoji: '🧹', value: 'aide-menager' },
      { id: '6-agent-domicile', label: 'Agent à domicile', emoji: '🧤', value: 'agent-domicile' },
      { id: '6-aes', label: 'Accompagnant éducatif et social (AES/DEAES)', emoji: '🧑‍🎓', value: 'aes' },
      { id: '6-garde', label: "Garde à domicile / garde d'enfants", emoji: '👶', value: 'garde' },
      { id: '6-aide-soignant', label: 'Aide-soignant(e) non diplômé(e)', emoji: '❤️‍🩹', value: 'aide-soignant' },
      { id: '6-benevole', label: "Bénévole auprès de personnes en perte d'autonomie", emoji: '🎁', value: 'benevole' },
      { id: '6-ash', label: 'Agent hospitalier / ASH', emoji: '🚑', value: 'ash' },
      { id: '6-autre', label: 'Autre', emoji: '➕', value: 'autre' },
    ],
  },
  {
    id: 7,
    question: "Dans quel cadre as-tu exercé ?",
    type: 'multiple',
    options: [
      { id: '7-domicile', label: 'À domicile', emoji: '🏠', value: 'domicile' },
      { id: '7-etablissement', label: 'En établissement (EHPAD, foyer, etc.)', emoji: '🏥', value: 'etablissement' },
      { id: '7-salarie', label: 'En tant que salarié(e)', emoji: '💼', value: 'salarie' },
      { id: '7-benevole', label: 'En tant que bénévole ou indépendant(e)', emoji: '🙌', value: 'benevole' },
      { id: '7-sante', label: 'En établissement de santé (hôpital, clinique)', emoji: '⛨', value: 'sante' },
    ],
  },
  {
    id: 8,
    question: "Pourquoi veux-tu faire une VAE ?",
    type: 'multiple',
    options: [
      { id: '8-evolution', label: 'Pour évoluer professionnellement', emoji: '📈', value: 'evolution' },
      { id: '8-reconnaissance', label: 'Pour obtenir une reconnaissance officielle', emoji: '🎓', value: 'reconnaissance' },
      { id: '8-concours', label: 'Pour accéder à un concours ou une formation', emoji: '🎯', value: 'concours' },
      { id: '8-personnel', label: 'Pour moi-même, personnellement', emoji: '💡', value: 'personnel' },
    ],
  },
]

// Questions used for eligibility calculation (in order)
export const eligibilityQuestions = [1, 2, 3, 4, 5]

// Informational questions (not used for eligibility)
export const informationalQuestions = [6, 7, 8]
