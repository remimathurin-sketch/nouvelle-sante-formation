import { BookOpen, MessageSquare, Trophy, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Activity {
  id: string
  type: 'lesson' | 'badge' | 'forum' | 'event'
  title: string
  description?: string
  timestamp: Date
}

interface ActivityFeedProps {
  activities: Activity[]
  className?: string
}

const iconMap = {
  lesson: BookOpen,
  badge: Trophy,
  forum: MessageSquare,
  event: Calendar,
}

const colorMap = {
  lesson: 'bg-blue-100 text-blue-600',
  badge: 'bg-yellow-100 text-yellow-600',
  forum: 'bg-green-100 text-green-600',
  event: 'bg-purple-100 text-purple-600',
}

export function ActivityFeed({ activities, className }: ActivityFeedProps) {
  const formatTime = (date: Date) => {
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'À l\'instant'
    if (minutes < 60) return `Il y a ${minutes} min`
    if (hours < 24) return `Il y a ${hours}h`
    if (days < 7) return `Il y a ${days}j`
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
    }).format(date)
  }

  if (activities.length === 0) {
    return (
      <Card className={className}>
        <CardHeader>
          <CardTitle className="text-lg">Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground text-center py-4">
            Aucune activité récente
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-lg">Activité récente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = iconMap[activity.type]
            return (
              <div key={activity.id} className="flex items-start gap-3">
                <div
                  className={cn(
                    'flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center',
                    colorMap[activity.type]
                  )}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{activity.title}</p>
                  {activity.description && (
                    <p className="text-xs text-muted-foreground truncate">
                      {activity.description}
                    </p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0">
                  {formatTime(activity.timestamp)}
                </span>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
