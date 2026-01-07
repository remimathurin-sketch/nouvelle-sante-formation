import Link from 'next/link'
import { Video, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Webinar {
  id: string
  title: string
  date: Date
  duration: string
  host: string
  link?: string
}

interface UpcomingWebinarsProps {
  webinars: Webinar[]
}

export function UpcomingWebinars({ webinars }: UpcomingWebinarsProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  const isStartingSoon = (date: Date) => {
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    return diff > 0 && diff <= 15 * 60 * 1000 // 15 minutes
  }

  const isLive = (date: Date, durationMinutes: number) => {
    const now = new Date()
    const endTime = new Date(date.getTime() + durationMinutes * 60 * 1000)
    return now >= date && now <= endTime
  }

  if (webinars.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Video className="h-5 w-5" />
            Prochains webinaires
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground/50" />
            <p className="text-sm text-muted-foreground mt-3">
              Aucun webinaire prévu pour le moment
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Video className="h-5 w-5" />
          Prochains webinaires
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {webinars.slice(0, 3).map((webinar) => {
            const durationMinutes = parseInt(webinar.duration) || 60
            const live = isLive(webinar.date, durationMinutes)
            const startingSoon = isStartingSoon(webinar.date)

            return (
              <div
                key={webinar.id}
                className="flex items-start gap-4 p-3 rounded-lg bg-muted/50"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Video className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-sm truncate">{webinar.title}</h3>
                    {live && (
                      <Badge variant="destructive" className="animate-pulse">
                        En direct
                      </Badge>
                    )}
                    {startingSoon && !live && (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                        Bientôt
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {formatDate(webinar.date)} • {webinar.duration} • {webinar.host}
                  </p>
                </div>
                {(live || startingSoon) && webinar.link && (
                  <Button size="sm" asChild>
                    <Link href={webinar.link} target="_blank">
                      Rejoindre
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                )}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
