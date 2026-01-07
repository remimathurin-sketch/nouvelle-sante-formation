'use client'

import { Trophy, Star, Flame, Target, BookOpen, Users, Calendar, Award } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface Badge {
  id: string
  name: string
  description: string
  icon: LucideIcon
  earnedAt?: Date
  isLocked: boolean
  progress?: number
  requirement?: string
}

// Mock data - À remplacer par les données réelles de la BDD
const mockBadges: Badge[] = [
  {
    id: '1',
    name: 'Premier pas',
    description: 'Complétez votre première leçon',
    icon: Target,
    earnedAt: new Date('2025-12-02'),
    isLocked: false,
  },
  {
    id: '2',
    name: 'Semaine de feu',
    description: '7 jours consécutifs de connexion',
    icon: Flame,
    earnedAt: new Date('2025-12-09'),
    isLocked: false,
  },
  {
    id: '3',
    name: 'Module complété',
    description: 'Terminez un module entier',
    icon: BookOpen,
    earnedAt: new Date('2025-12-15'),
    isLocked: false,
  },
  {
    id: '4',
    name: 'Étoile montante',
    description: 'Atteignez 500 points',
    icon: Star,
    earnedAt: new Date('2025-12-20'),
    isLocked: false,
  },
  {
    id: '5',
    name: 'Champion',
    description: 'Atteignez 1000 points',
    icon: Trophy,
    isLocked: true,
    progress: 75,
    requirement: '750/1000 points',
  },
  {
    id: '6',
    name: 'Social',
    description: 'Postez 5 messages sur le forum',
    icon: Users,
    isLocked: true,
    progress: 40,
    requirement: '2/5 messages',
  },
  {
    id: '7',
    name: 'Assidu',
    description: '30 jours consécutifs de connexion',
    icon: Calendar,
    isLocked: true,
    progress: 23,
    requirement: '7/30 jours',
  },
  {
    id: '8',
    name: 'Expert VAE',
    description: 'Complétez 100% d\'une formation',
    icon: Award,
    isLocked: true,
    progress: 50,
    requirement: '50% complété',
  },
]

export default function BadgesPage() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }).format(date)
  }

  const earnedBadges = mockBadges.filter(b => !b.isLocked)
  const lockedBadges = mockBadges.filter(b => b.isLocked)
  const totalBadges = mockBadges.length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Mes Badges</h1>
        <p className="text-muted-foreground mt-1">
          {earnedBadges.length} badge{earnedBadges.length > 1 ? 's' : ''} obtenu{earnedBadges.length > 1 ? 's' : ''} sur {totalBadges}
        </p>
      </div>

      {/* Badges obtenus */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Badges obtenus ({earnedBadges.length})
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {earnedBadges.map((badge) => {
            const Icon = badge.icon
            return (
              <Card key={badge.id} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold mt-4 text-sm">{badge.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {badge.description}
                  </p>
                  <p className="text-xs text-primary mt-2">
                    Obtenu le {formatDate(badge.earnedAt!)}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Badges à débloquer */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">À débloquer ({lockedBadges.length})</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {lockedBadges.map((badge) => {
            const Icon = badge.icon
            return (
              <Card key={badge.id} className="text-center opacity-75 hover:opacity-100 transition-opacity">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center grayscale">
                    <Icon className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mt-4 text-sm">{badge.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {badge.description}
                  </p>
                  {badge.progress !== undefined && (
                    <div className="mt-3">
                      <Progress value={badge.progress} className="h-1.5" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {badge.requirement}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Statistiques */}
      <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <CardHeader>
          <CardTitle className="text-lg">Votre progression</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span>Badges collectionnés</span>
                <span className="font-semibold">{earnedBadges.length}/{totalBadges}</span>
              </div>
              <Progress value={(earnedBadges.length / totalBadges) * 100} className="h-3" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-3xl font-bold text-primary">
                {Math.round((earnedBadges.length / totalBadges) * 100)}%
              </p>
              <p className="text-sm text-muted-foreground">de la collection</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
