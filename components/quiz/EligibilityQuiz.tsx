'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProgressBar } from './ProgressBar'
import { QuizQuestion } from './QuizQuestion'
import { LeadForm } from './LeadForm'
import { quizQuestions } from './quiz-data'
import { QuizAnswers, LeadData, EligibilityResult } from './types'

const STORAGE_KEY = 'nsf-eligibility-quiz'

export function EligibilityQuiz() {
  const router = useRouter()
  const [started, setStarted] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Load saved answers from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const { answers: savedAnswers, step } = JSON.parse(saved)
        setAnswers(savedAnswers)
        setCurrentStep(step)
        if (step > 0) setStarted(true)
      } catch {
        localStorage.removeItem(STORAGE_KEY)
      }
    }
  }, [])

  // Save answers to localStorage
  useEffect(() => {
    if (started) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ answers, step: currentStep })
      )
    }
  }, [answers, currentStep, started])

  const currentQuestion = quizQuestions[currentStep]
  const totalQuestions = quizQuestions.length

  const canProceed = () => {
    const answer = answers[currentQuestion?.id]
    if (!answer) return false
    if (Array.isArray(answer)) return answer.length > 0
    return true
  }

  const handleAnswer = (answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answer,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setShowLeadForm(true)
    }
  }

  const handleBack = () => {
    if (showLeadForm) {
      setShowLeadForm(false)
    } else if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    } else {
      setStarted(false)
    }
  }

  /**
   * Nouvelle logique d'éligibilité
   *
   * Q1: Expérience avec personnes en perte d'autonomie
   *   - Non → not-eligible
   *   - Oui → Q2
   *
   * Q2: Années d'expérience cumulée
   *   - <6 mois ou 6m-1an → evaluation-personnalisee
   *   - 1an+ ou 3ans+ → Q3
   *
   * Q3: Expérience en lien avec activités (toilette, accompagnement, équipe)
   *   - Non ou Partiellement → evaluation-approfondie
   *   - Oui → Q4
   *
   * Q4: Justificatifs officiels
   *   - Oui complets → eligible
   *   - Non ou Incomplets → Q5
   *
   * Q5: Traces d'activité
   *   - Oui plusieurs ou quelques-uns → eligible-accompagnement
   *   - Non rien → vae-difficile
   */
  const calculateResult = (): EligibilityResult => {
    // Q1: Expérience avec personnes en perte d'autonomie
    const hasExperience = answers[1] === 'yes'
    if (!hasExperience) {
      return 'not-eligible'
    }

    // Q2: Années d'expérience cumulée
    const experience = answers[2] as string
    const hasLowExperience = experience === 'less-6months' || experience === '6months-1year'
    if (hasLowExperience) {
      return 'evaluation-personnalisee'
    }

    // Q3: Expérience en lien avec activités
    const activityMatch = answers[3] as string
    if (activityMatch === 'no' || activityMatch === 'partial') {
      return 'evaluation-approfondie'
    }

    // Q4: Justificatifs officiels
    const hasJustificatifs = answers[4] as string
    if (hasJustificatifs === 'yes-complete') {
      return 'eligible'
    }

    // Q5: Traces d'activité
    const hasTraces = answers[5] as string
    if (hasTraces === 'many' || hasTraces === 'some') {
      return 'eligible-accompagnement'
    }

    return 'vae-difficile'
  }

  const getResultUrl = (result: EligibilityResult): string => {
    switch (result) {
      case 'eligible':
        return '/tu-es-eligible'
      case 'eligible-accompagnement':
        return '/tu-es-eligible-avec-accompagnement'
      case 'evaluation-personnalisee':
        return '/evaluation-personnalisee'
      case 'evaluation-approfondie':
        return '/besoin-evaluation-approfondie'
      case 'vae-difficile':
        return '/vae-tres-difficile'
      case 'not-eligible':
        return '/tu-n-es-pas-eligible'
      default:
        return '/tu-n-es-pas-eligible'
    }
  }

  const handleLeadSubmit = async (leadData: LeadData) => {
    setIsLoading(true)

    // Calculate result
    const result = calculateResult()

    // Save lead data to localStorage for result pages
    localStorage.setItem(
      'nsf-quiz-result',
      JSON.stringify({
        ...leadData,
        answers,
        result,
        submittedAt: new Date().toISOString(),
      })
    )

    // Clear quiz progress
    localStorage.removeItem(STORAGE_KEY)

    // TODO: Send lead data to API/CRM

    // Redirect based on result
    setTimeout(() => {
      router.push(getResultUrl(result))
    }, 500)
  }

  const handleStart = () => {
    setStarted(true)
    setCurrentStep(0)
  }

  // Start screen
  if (!started) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <Trophy className="w-10 h-10 text-primary" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Passe ton test d&apos;éligibilité à la VAE 🏆
        </h1>

        <p className="text-lg text-muted-foreground mb-6">
          🎓 Es-tu éligible à la VAE pour devenir Auxiliaire de Vie ou Aide
          soignant.e ?
        </p>

        <p className="text-muted-foreground mb-8">
          En 2 minutes, découvre si tu peux commencer ton parcours de
          validation.
        </p>

        <div className="flex flex-col gap-3 mb-8 max-w-sm mx-auto">
          <div className="flex items-center gap-3 text-left">
            <span className="text-green-500">✅</span>
            <span className="text-muted-foreground">Pas de compte à créer</span>
          </div>
          <div className="flex items-center gap-3 text-left">
            <span className="text-green-500">✅</span>
            <span className="text-muted-foreground">Réponses simples</span>
          </div>
          <div className="flex items-center gap-3 text-left">
            <span className="text-green-500">✅</span>
            <span className="text-muted-foreground">
              Résultat immédiat + étapes à suivre
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          👉 Clique sur &quot;Commencer le test&quot; et réponds honnêtement à
          chaque question.
        </p>

        <Button onClick={handleStart} size="lg" className="text-lg px-8">
          Commencer le TEST
        </Button>
      </motion.div>
    )
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={handleBack}
        className="mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour
      </Button>

      {/* Progress bar (only during questions) */}
      {!showLeadForm && (
        <ProgressBar
          current={currentStep + 1}
          total={totalQuestions}
          className="mb-8"
        />
      )}

      {/* Content */}
      <AnimatePresence mode="wait">
        {showLeadForm ? (
          <LeadForm
            key="lead-form"
            onSubmit={handleLeadSubmit}
            isLoading={isLoading}
          />
        ) : (
          <QuizQuestion
            key={`question-${currentQuestion.id}`}
            question={currentQuestion}
            answer={answers[currentQuestion.id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            canProceed={canProceed()}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
