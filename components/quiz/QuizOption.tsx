'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface QuizOptionProps {
  id: string
  label: string
  emoji?: string
  selected: boolean
  type: 'single' | 'multiple'
  onSelect: () => void
}

export function QuizOption({
  label,
  emoji,
  selected,
  type,
  onSelect,
}: QuizOptionProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'w-full flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200',
        'hover:border-primary/50 hover:bg-primary/5',
        selected
          ? 'border-primary bg-primary/10 shadow-md'
          : 'border-muted bg-white'
      )}
    >
      {/* Checkbox/Radio indicator */}
      <div
        className={cn(
          'flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors',
          type === 'single' ? 'rounded-full' : 'rounded-md',
          selected
            ? 'border-primary bg-primary text-white'
            : 'border-muted-foreground/30'
        )}
      >
        {selected && <Check className="w-4 h-4" />}
      </div>

      {/* Emoji */}
      {emoji && <span className="text-xl flex-shrink-0">{emoji}</span>}

      {/* Label */}
      <span
        className={cn(
          'text-sm font-medium',
          selected ? 'text-foreground' : 'text-muted-foreground'
        )}
      >
        {label}
      </span>
    </button>
  )
}
