export interface QuizQuestion {
  id: number
  question: string
  description?: string
  type: 'single' | 'multiple'
  options: QuizOption[]
  image?: string
}

export interface QuizOption {
  id: string
  label: string
  emoji?: string
  value: string
}

export interface QuizAnswers {
  [questionId: number]: string | string[]
}

export interface LeadData {
  firstName: string
  lastName: string
  email: string
  phone: string
}

export type EligibilityResult =
  | 'eligible'                    // /tu-es-eligible
  | 'eligible-accompagnement'     // /tu-es-eligible-avec-accompagnement
  | 'evaluation-personnalisee'    // /evaluation-personnalisee
  | 'evaluation-approfondie'      // /besoin-evaluation-approfondie
  | 'vae-difficile'               // /vae-tres-difficile
  | 'not-eligible'                // /tu-n-es-pas-eligible
