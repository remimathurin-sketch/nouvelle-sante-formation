import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface BadgeCardProps {
  name: string
  description: string
  image: string
  earnedAt?: Date
  isLocked?: boolean
}

export function BadgeCard({
  name,
  description,
  image,
  earnedAt,
  isLocked = false,
}: BadgeCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date)
  }

  return (
    <Card className={cn('text-center', isLocked && 'opacity-50')}>
      <CardContent className="p-4">
        <div
          className={cn(
            'w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl',
            isLocked ? 'bg-muted grayscale' : 'bg-gradient-to-br from-yellow-100 to-yellow-200'
          )}
        >
          {image.startsWith('http') ? (
            <img src={image} alt={name} className="w-10 h-10" />
          ) : (
            <span>{image}</span>
          )}
        </div>
        <h3 className="font-medium mt-3 text-sm">{name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {description}
        </p>
        {earnedAt && !isLocked && (
          <p className="text-xs text-primary mt-2">
            Obtenu le {formatDate(earnedAt)}
          </p>
        )}
        {isLocked && (
          <p className="text-xs text-muted-foreground mt-2">Non débloqué</p>
        )}
      </CardContent>
    </Card>
  )
}
