'use client'

import { CheckCircle2, Circle, Lock, Clock, BookOpen, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import Link from 'next/link'

// Mock data - À remplacer par les données réelles de la BDD
const mockParcoursData = {
  formation: {
    id: '1',
    title: 'VAE Aide-Soignant (DEAS)',
    enrolledAt: new Date('2025-12-01'),
    estimatedEndDate: new Date('2026-03-01'),
  },
  stats: {
    totalProgress: 50,
    modulesCompleted: 6,
    totalModules: 12,
    totalTimeSpent: '12h 30min',
    streak: 7,
  },
  modules: [
    {
      id: '1',
      title: 'Introduction à la VAE',
      lessonsCompleted: 5,
      totalLessons: 5,
      status: 'completed' as const,
      unlockedAt: new Date('2025-12-01'),
    },
    {
      id: '2',
      title: 'Communication professionnelle',
      lessonsCompleted: 6,
      totalLessons: 6,
      status: 'completed' as const,
      unlockedAt: new Date('2025-12-08'),
    },
    {
      id: '3',
      title: 'Les soins d\'hygiène',
      lessonsCompleted: 6,
      totalLessons: 8,
      status: 'in-progress' as const,
      unlockedAt: new Date('2025-12-15'),
    },
    {
      id: '4',
      title: 'Accompagnement de la vie quotidienne',
      lessonsCompleted: 0,
      totalLessons: 10,
      status: 'locked' as const,
      unlockDate: new Date('2026-01-14'),
    },
    {
      id: '5',
      title: 'Gestion des urgences',
      lessonsCompleted: 0,
      totalLessons: 6,
      status: 'locked' as const,
      unlockDate: new Date('2026-01-21'),
    },
    {
      id: '6',
      title: 'Préparation à l\'oral',
      lessonsCompleted: 0,
      totalLessons: 8,
      status: 'locked' as const,
      unlockDate: new Date('2026-01-28'),
    },
  ],
}

export default function MonParcoursPage() {
  const { formation, stats, modules } = mockParcoursData

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

  const getStatusIcon = (status: 'completed' | 'in-progress' | 'locked') => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-6 w-6 text-green-600" />
      case 'in-progress':
        return <Circle className="h-6 w-6 text-primary fill-primary/20" />
      case 'locked':
        return <Lock className="h-6 w-6 text-muted-foreground" />
    }
  }

  const getModuleProgress = (module: typeof modules[0]) => {
    if (module.totalLessons === 0) return 0
    return Math.round((module.lessonsCompleted / module.totalLessons) * 100)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Mon Parcours</h1>
        <p className="text-muted-foreground mt-1">{formation.title}</p>
      </div>

      {/* Statistiques globales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold text-primary">{stats.totalProgress}%</p>
            <p className="text-sm text-muted-foreground">Progression</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold">{stats.modulesCompleted}/{stats.totalModules}</p>
            <p className="text-sm text-muted-foreground">Modules</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-3xl font-bold">{stats.totalTimeSpent}</p>
            <p className="text-sm text-muted-foreground">Temps passé</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-1">
              <p className="text-3xl font-bold">{stats.streak}</p>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-sm text-muted-foreground">Jours consécutifs</p>
          </CardContent>
        </Card>
      </div>

      {/* Timeline des modules */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Progression des modules</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />

            <div className="space-y-8">
              {modules.map((module, index) => (
                <div key={module.id} className="relative pl-10">
                  {/* Icône de statut */}
                  <div className="absolute left-0 bg-background">
                    {getStatusIcon(module.status)}
                  </div>

                  <div
                    className={cn(
                      'p-4 rounded-lg border',
                      module.status === 'completed' && 'border-green-200 bg-green-50/50',
                      module.status === 'in-progress' && 'border-primary/30 bg-primary/5',
                      module.status === 'locked' && 'border-dashed opacity-60'
                    )}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <div>
                        <h3 className="font-medium">{module.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {module.status === 'locked' ? (
                            <>Déblocage le {formatDate(module.unlockDate!)}</>
                          ) : (
                            <>{module.lessonsCompleted}/{module.totalLessons} leçons</>
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-4">
                        {module.status !== 'locked' && (
                          <div className="w-32">
                            <Progress value={getModuleProgress(module)} className="h-2" />
                          </div>
                        )}

                        {module.status === 'in-progress' && (
                          <Button size="sm" asChild>
                            <Link href={`/formation/${formation.id}`}>Continuer</Link>
                          </Button>
                        )}

                        {module.status === 'completed' && (
                          <Button size="sm" variant="outline" asChild>
                            <Link href={`/formation/${formation.id}`}>Revoir</Link>
                          </Button>
                        )}

                        {module.status === 'locked' && (
                          <Button size="sm" variant="outline" disabled>
                            <Lock className="h-4 w-4 mr-1" />
                            Verrouillé
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informations sur la formation */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date de début</p>
                <p className="font-medium">{formatDate(formation.enrolledAt)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Fin estimée</p>
                <p className="font-medium">{formatDate(formation.estimatedEndDate)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
