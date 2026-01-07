/**
 * ============================================
 * CONFIGURATION DES FORMATIONS
 * ============================================
 * 
 * Modifiez ce fichier pour ajouter/modifier les formations.
 * Structure: Formation > Modules > Leçons
 */

import { DRIP_DELAYS } from './drip-config'

// Type pour une leçon
interface LessonConfig {
  title: string
  duration?: number  // Durée en secondes (optionnel)
  videoUrl?: string  // URL de la vidéo (optionnel)
}

// Type pour un module
interface ModuleConfig {
  title: string
  emoji: string
  description: string
  unlockDelay: number
  lessons: LessonConfig[]
}

// Type pour une formation
interface FormationConfig {
  title: string
  slug: string
  description: string
  price: number
  image: string
  modules: ModuleConfig[]
}

// ============================================
// FORMATION 1: VAE DEAS (Aide-Soignant)
// ============================================
export const FORMATION_DEAS: FormationConfig = {
  title: 'VAE Aide-Soignant (DEAS)',
  slug: 'vae-aide-soignant-deas',
  description: 'Parcours complet de Validation des Acquis de l\'Expérience pour obtenir le Diplôme d\'État d\'Aide-Soignant. Formation 100% en ligne avec accompagnement personnalisé.',
  price: 2400,
  image: '/images/formations/aide-soignant.jpg',
  modules: [
    // ----------------------------------------
    // INTRODUCTION
    // ----------------------------------------
    {
      title: 'Introduction',
      emoji: '👋',
      description: 'Bienvenue dans ton parcours VAE ! Découvre la formation et l\'équipe qui t\'accompagne.',
      unlockDelay: DRIP_DELAYS.DEAS.introduction,
      lessons: [
        { title: 'Bienvenue dans l\'aventure', duration: 180 },
        { title: 'Présentation de la VAE', duration: 300 },
        { title: 'Les conditions d\'accès à la VAE', duration: 240 },
        { title: 'Déroulement de ta formation', duration: 300 },
        { title: 'Un accompagnement humain et expert', duration: 360 },
        { title: 'Une équipe engagée à tes côtés', duration: 240 },
        { title: 'Formation aux gestes de premiers secours (PSC1)', duration: 180 },
        { title: 'Règlement intérieur', duration: 120 },
        { title: 'En résumé', duration: 120 },
        { title: 'On fait les présentations ?', duration: 300 },
      ],
    },
    // ----------------------------------------
    // MODULE 1: Premiers pas
    // ----------------------------------------
    {
      title: 'Premiers pas dans la VAE',
      emoji: '👣',
      description: 'Comprendre les bases de la démarche VAE et se préparer pour la suite.',
      unlockDelay: DRIP_DELAYS.DEAS.module1,
      lessons: [
        { title: 'Qu\'est-ce que la VAE concrètement ?', duration: 300 },
        { title: 'Le référentiel du DEAS', duration: 420 },
        { title: 'Les 5 blocs de compétences', duration: 360 },
        { title: 'Identifier tes compétences', duration: 300 },
        { title: 'Organiser ta démarche', duration: 240 },
        { title: 'Quiz - Premiers pas', duration: 600 },
      ],
    },
    // ----------------------------------------
    // MODULE 2: Livret 1
    // ----------------------------------------
    {
      title: 'Livret 1 : Dossier de recevabilité',
      emoji: '📕',
      description: 'Préparer et soumettre ton dossier de recevabilité pour la VAE.',
      unlockDelay: DRIP_DELAYS.DEAS.module2,
      lessons: [
        { title: 'Présentation du Livret 1', duration: 240 },
        { title: 'Les pièces justificatives', duration: 360 },
        { title: 'Remplir le formulaire Cerfa', duration: 480 },
        { title: 'Décrire ton expérience professionnelle', duration: 420 },
        { title: 'Vérification et envoi', duration: 300 },
        { title: 'Après l\'envoi : que se passe-t-il ?', duration: 240 },
        { title: 'Quiz - Livret 1', duration: 600 },
      ],
    },
    // ----------------------------------------
    // MODULE 3: Livret 2 - Comprendre
    // ----------------------------------------
    {
      title: 'Livret 2 : Comprendre les attendus',
      emoji: '📗',
      description: 'Comprendre les attentes du jury et la structure du Livret 2.',
      unlockDelay: DRIP_DELAYS.DEAS.module3,
      lessons: [
        { title: 'Structure du Livret 2', duration: 360 },
        { title: 'Les attentes du jury', duration: 420 },
        { title: 'Analyser le référentiel', duration: 480 },
        { title: 'Choisir tes situations de travail', duration: 540 },
        { title: 'La méthode de description', duration: 420 },
        { title: 'Quiz - Comprendre le Livret 2', duration: 600 },
      ],
    },
    // ----------------------------------------
    // MODULE 4: Livret 2 - Raconter
    // ----------------------------------------
    {
      title: 'Livret 2 : Raconter ton expérience',
      emoji: '📘',
      description: 'Rédiger tes activités et mettre en valeur tes compétences.',
      unlockDelay: DRIP_DELAYS.DEAS.module4,
      lessons: [
        { title: 'Décrire une situation de travail', duration: 600 },
        { title: 'Le vocabulaire professionnel', duration: 480 },
        { title: 'Bloc 1 : Accompagnement dans les actes de la vie quotidienne', duration: 720 },
        { title: 'Bloc 2 : État clinique d\'une personne', duration: 720 },
        { title: 'Bloc 3 : Soins d\'hygiène et de confort', duration: 720 },
        { title: 'Bloc 4 : Travail en équipe', duration: 600 },
        { title: 'Bloc 5 : Transmission et continuité des soins', duration: 600 },
        { title: 'Quiz - Raconter ton expérience', duration: 600 },
      ],
    },
    // ----------------------------------------
    // MODULE 5: Finalisation
    // ----------------------------------------
    {
      title: 'Finalisation du Livret 2',
      emoji: '👌',
      description: 'Relecture, correction et envoi de ton dossier complet.',
      unlockDelay: DRIP_DELAYS.DEAS.module5,
      lessons: [
        { title: 'Relecture et correction', duration: 480 },
        { title: 'Vérifier la cohérence', duration: 360 },
        { title: 'Les erreurs à éviter', duration: 300 },
        { title: 'Préparer les annexes', duration: 420 },
        { title: 'Mise en page finale', duration: 300 },
        { title: 'Envoi du dossier', duration: 240 },
      ],
    },
    // ----------------------------------------
    // MODULE 6: Préparation oral
    // ----------------------------------------
    {
      title: 'Préparation à l\'oral du jury',
      emoji: '🎙️',
      description: 'Se préparer à présenter son parcours devant le jury.',
      unlockDelay: DRIP_DELAYS.DEAS.module6,
      lessons: [
        { title: 'Le déroulement de l\'oral', duration: 360 },
        { title: 'Se présenter efficacement', duration: 420 },
        { title: 'Les questions fréquentes du jury', duration: 540 },
        { title: 'Gérer son stress', duration: 360 },
        { title: 'Simulation d\'entretien', duration: 900 },
        { title: 'La tenue et l\'attitude', duration: 240 },
        { title: 'Le jour J : checklist', duration: 180 },
      ],
    },
    // ----------------------------------------
    // MODULE BONUS
    // ----------------------------------------
    {
      title: 'Après ton diplôme',
      emoji: '🎓',
      description: 'Félicitations ! Découvre les opportunités après l\'obtention de ton diplôme.',
      unlockDelay: DRIP_DELAYS.DEAS.bonus,
      lessons: [
        { title: 'Et maintenant, que faire ?', duration: 600 },
      ],
    },
  ],
}

// ============================================
// FORMATION 2: VAE DEAES (Auxiliaire de Vie)
// ============================================
export const FORMATION_DEAES: FormationConfig = {
  title: 'VAE Auxiliaire de Vie (DEAES)',
  slug: 'vae-auxiliaire-de-vie-deaes',
  description: 'Parcours complet de Validation des Acquis de l\'Expérience pour obtenir le Diplôme d\'État d\'Accompagnant Éducatif et Social. Formation 100% en ligne avec accompagnement personnalisé.',
  price: 2000,
  image: '/images/formations/auxiliaire-vie.jpg',
  modules: [
    {
      title: 'Introduction',
      emoji: '👋',
      description: 'Bienvenue dans ton parcours VAE DEAES !',
      unlockDelay: DRIP_DELAYS.DEAES.introduction,
      lessons: [
        { title: 'Bienvenue dans l\'aventure', duration: 180 },
        { title: 'Présentation de la VAE DEAES', duration: 300 },
        { title: 'Les conditions d\'accès', duration: 240 },
        { title: 'Déroulement de ta formation', duration: 300 },
        { title: 'L\'équipe à tes côtés', duration: 240 },
        { title: 'En résumé', duration: 120 },
      ],
    },
    {
      title: 'Premiers pas dans la VAE',
      emoji: '👣',
      description: 'Comprendre les bases de la démarche VAE DEAES.',
      unlockDelay: DRIP_DELAYS.DEAES.module1,
      lessons: [
        { title: 'Qu\'est-ce que le DEAES ?', duration: 300 },
        { title: 'Le référentiel métier', duration: 420 },
        { title: 'Les domaines de compétences', duration: 360 },
        { title: 'Identifier tes compétences', duration: 300 },
        { title: 'Quiz - Premiers pas', duration: 600 },
      ],
    },
    {
      title: 'Livret 1 : Dossier de recevabilité',
      emoji: '📕',
      description: 'Préparer ton dossier de recevabilité.',
      unlockDelay: DRIP_DELAYS.DEAES.module2,
      lessons: [
        { title: 'Présentation du Livret 1', duration: 240 },
        { title: 'Les justificatifs nécessaires', duration: 360 },
        { title: 'Remplir le formulaire', duration: 480 },
        { title: 'Envoi et suivi', duration: 300 },
        { title: 'Quiz - Livret 1', duration: 600 },
      ],
    },
    {
      title: 'Livret 2 : Comprendre les attendus',
      emoji: '📗',
      description: 'Comprendre la structure du Livret 2 DEAES.',
      unlockDelay: DRIP_DELAYS.DEAES.module3,
      lessons: [
        { title: 'Structure du Livret 2', duration: 360 },
        { title: 'Les attentes du jury', duration: 420 },
        { title: 'Choisir tes situations', duration: 480 },
        { title: 'Quiz - Comprendre le Livret 2', duration: 600 },
      ],
    },
    {
      title: 'Livret 2 : Raconter ton expérience',
      emoji: '📘',
      description: 'Rédiger tes activités professionnelles.',
      unlockDelay: DRIP_DELAYS.DEAES.module4,
      lessons: [
        { title: 'Décrire une situation de travail', duration: 600 },
        { title: 'Le vocabulaire du métier', duration: 480 },
        { title: 'DC1 : Se positionner comme professionnel', duration: 720 },
        { title: 'DC2 : Accompagner les personnes', duration: 720 },
        { title: 'DC3 : Coopérer avec l\'équipe', duration: 600 },
        { title: 'DC4 : S\'inscrire dans un projet personnalisé', duration: 600 },
        { title: 'Quiz - Raconter ton expérience', duration: 600 },
      ],
    },
    {
      title: 'Finalisation du Livret 2',
      emoji: '👌',
      description: 'Relecture et envoi de ton dossier.',
      unlockDelay: DRIP_DELAYS.DEAES.module5,
      lessons: [
        { title: 'Relecture et correction', duration: 480 },
        { title: 'Les erreurs à éviter', duration: 300 },
        { title: 'Mise en page et envoi', duration: 360 },
      ],
    },
    {
      title: 'Préparation à l\'oral du jury',
      emoji: '🎙️',
      description: 'Se préparer pour l\'entretien avec le jury.',
      unlockDelay: DRIP_DELAYS.DEAES.module6,
      lessons: [
        { title: 'Le déroulement de l\'oral', duration: 360 },
        { title: 'Se présenter', duration: 420 },
        { title: 'Les questions du jury', duration: 540 },
        { title: 'Simulation d\'entretien', duration: 900 },
        { title: 'Le jour J', duration: 180 },
      ],
    },
    {
      title: 'Après ton diplôme',
      emoji: '🎓',
      description: 'Les opportunités après le DEAES.',
      unlockDelay: DRIP_DELAYS.DEAES.bonus,
      lessons: [
        { title: 'Et maintenant ?', duration: 600 },
      ],
    },
  ],
}

// ============================================
// LISTE DE TOUTES LES FORMATIONS
// ============================================
export const ALL_FORMATIONS: FormationConfig[] = [
  FORMATION_DEAS,
  FORMATION_DEAES,
]

export type { FormationConfig, ModuleConfig, LessonConfig }
