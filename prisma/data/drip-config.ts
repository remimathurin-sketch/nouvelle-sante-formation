/**
 * ============================================
 * CONFIGURATION DES DÉLAIS DE DÉBLOCAGE
 * ============================================
 * 
 * Modifiez ces valeurs pour ajuster le drip content.
 * Les délais sont en JOURS après l'inscription.
 * 
 * Exemple: module2: 7 = disponible 7 jours après inscription
 */

export const DRIP_DELAYS = {
  // Parcours VAE DEAS (Aide-Soignant)
  DEAS: {
    introduction: 0,      // Disponible immédiatement
    module1: 0,           // Disponible immédiatement
    module2: 7,           // 1 semaine après inscription
    module3: 14,          // 2 semaines
    module4: 28,          // 4 semaines
    module5: 42,          // 6 semaines
    module6: 56,          // 8 semaines
    bonus: 70,            // 10 semaines
  },

  // Parcours VAE DEAES (Auxiliaire de Vie)
  DEAES: {
    introduction: 0,
    module1: 0,
    module2: 7,
    module3: 14,
    module4: 28,
    module5: 42,
    module6: 56,
    bonus: 70,
  },
}

export type FormationType = keyof typeof DRIP_DELAYS
