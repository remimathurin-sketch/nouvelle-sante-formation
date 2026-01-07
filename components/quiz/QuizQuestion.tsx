'use client'

import { motion } from 'framer-motion'
import { QuizQuestion as QuizQuestionType } from './types'
import { QuizOption } from './QuizOption'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface QuizQuestionProps {
  question: QuizQuestionType
  answer: string | string[] | undefined
  onAnswer: (answer: string | string[]) => void
  onNext: () => void
  canProceed: boolean
}

export function QuizQuestion({
  question,
  answer,
  onAnswer,
  onNext,
  canProceed,
}: QuizQuestionProps) {
  const handleOptionSelect = (value: string) => {
    if (question.type === 'single') {
      onAnswer(value)
    } else {
      const currentAnswers = (answer as string[]) || []
      if (currentAnswers.includes(value)) {
        onAnswer(currentAnswers.filter((v) => v !== value))
      } else {
        onAnswer([...currentAnswers, value])
      }
    }
  }

  const isSelected = (value: string) => {
    if (question.type === 'single') {
      return answer === value
    }
    return ((answer as string[]) || []).includes(value)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
        {question.question}
      </h2>

      {/* Description */}
      {question.description && (
        <p className="text-sm text-muted-foreground mb-4 bg-muted/50 p-3 rounded-lg">
          {question.description}
        </p>
      )}

      {question.type === 'multiple' && (
        <p className="text-sm text-muted-foreground mb-6">
          (plusieurs réponses possibles)
        </p>
      )}

      {/* Options */}
      <div className="space-y-3 mb-8">
        {question.options.map((option) => (
          <QuizOption
            key={option.id}
            id={option.id}
            label={option.label}
            emoji={option.emoji}
            selected={isSelected(option.value)}
            type={question.type}
            onSelect={() => handleOptionSelect(option.value)}
          />
        ))}
      </div>

      {/* Next Button */}
      <Button
        onClick={onNext}
        disabled={!canProceed}
        size="lg"
        className="w-full md:w-auto"
      >
        Question suivante
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  )
}
