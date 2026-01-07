import Link from 'next/link'
import { Lock, Play, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface ModuleCardProps {
  id: string
  title: string
  description?: string
  formationId: string
  duration?: string
  status: 'completed' | 'in-progress' | 'locked'
  unlockDate?: Date
  progress?: number
}

export function ModuleCard({
  id,
  title,
  description,
  formationId,
  duration,
  status,
  unlockDate,
  progress = 0,
}: ModuleCardProps) {
  const isLocked = status === 'locked'
  const isCompleted = status === 'completed'

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
    }).format(date)
  }

  return (
    <Card
      className={cn(
        'transition-all',
        isLocked && 'opacity-60',
        !isLocked && 'hover:shadow-md'
      )}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          {/* Status icon */}
          <div
            className={cn(
              'flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center',
              isCompleted && 'bg-green-100',
              status === 'in-progress' && 'bg-primary/10',
              isLocked && 'bg-muted'
            )}
          >
            {isCompleted && <CheckCircle className="h-5 w-5 text-green-600" />}
            {status === 'in-progress' && <Play className="h-5 w-5 text-primary" />}
            {isLocked && <Lock className="h-5 w-5 text-muted-foreground" />}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-medium text-foreground truncate">{title}</h3>
                {description && (
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {description}
                  </p>
                )}
              </div>
              {isCompleted && (
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Terminé
                </Badge>
              )}
            </div>

            {/* Progress or unlock info */}
            <div className="mt-3 flex items-center justify-between">
              {isLocked && unlockDate ? (
                <p className="text-xs text-muted-foreground">
                  Disponible le {formatDate(unlockDate)}
                </p>
              ) : (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {duration && <span>{duration}</span>}
                  {status === 'in-progress' && progress > 0 && (
                    <span>• {progress}% complété</span>
                  )}
                </div>
              )}

              {!isLocked && (
                <Button size="sm" variant={isCompleted ? 'outline' : 'default'} asChild>
                  <Link href={`/formation/${formationId}/module/${id}`}>
                    {isCompleted ? 'Revoir' : 'Continuer'}
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
