'use client'

import Link from 'next/link'
import { BookOpen, Clock, Play, CheckCircle2 } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

// Mock data - À remplacer par les données réelles de la BDD
const mockFormations = [
  {
    id: '1',
    title: 'VAE Aide-Soignant (DEAS)',
    description: 'Obtenez votre diplôme d\'État d\'Aide-Soignant grâce à la VAE. Formation complète avec accompagnement personnalisé.',
    image: '/images/formations/aide-soignant.jpg',
    progress: 50,
    modulesCompleted: 6,
    totalModules: 12,
    totalDuration: '24h',
    enrolledAt: new Date('2025-12-01'),
    status: 'in-progress' as const,
  },
  {
    id: '2',
    title: 'VAE Auxiliaire de Vie (DEAES)',
    description: 'Parcours VAE pour le Diplôme d\'État d\'Accompagnant Éducatif et Social.',
    image: '/images/formations/auxiliaire-vie.jpg',
    progress: 100,
    modulesCompleted: 10,
    totalModules: 10,
    totalDuration: '20h',
    enrolledAt: new Date('2025-10-15'),
    status: 'completed' as const,
  },
]

export default function FormationsPage() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  }

  const inProgressFormations = mockFormations.filter(f => f.status === 'in-progress')
  const completedFormations = mockFormations.filter(f => f.status === 'completed')

  if (mockFormations.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Mes Formations</h1>
        <Card className="text-center py-12">
          <CardContent>
            <BookOpen className="h-16 w-16 mx-auto text-muted-foreground/50" />
            <h2 className="text-lg font-semibold mt-4">Aucune formation</h2>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              Tu n'as pas encore de formation active. Découvre nos parcours et commence ta transformation professionnelle !
            </p>
            <Button className="mt-6" asChild>
              <Link href="/#programmes">Découvrir nos formations</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Mes Formations</h1>

      {/* Formations en cours */}
      {inProgressFormations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Play className="h-5 w-5 text-primary" />
            En cours ({inProgressFormations.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {inProgressFormations.map((formation) => (
              <Card key={formation.id} className="overflow-hidden">
                <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{formation.title}</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      En cours
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {formation.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progression</span>
                      <span className="font-medium">{formation.progress}%</span>
                    </div>
                    <Progress value={formation.progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {formation.modulesCompleted}/{formation.totalModules} modules
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formation.totalDuration}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Inscrit le {formatDate(formation.enrolledAt)}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/formation/${formation.id}`}>Continuer</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Formations terminées */}
      {completedFormations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Terminées ({completedFormations.length})
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {completedFormations.map((formation) => (
              <Card key={formation.id} className="overflow-hidden border-green-200">
                <div className="h-32 bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                  <CheckCircle2 className="h-12 w-12 text-green-600" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg">{formation.title}</CardTitle>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Terminée
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {formation.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progression</span>
                      <span className="font-medium text-green-600">100%</span>
                    </div>
                    <Progress value={100} className="h-2 bg-green-100 [&>div]:bg-green-600" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Inscrit le {formatDate(formation.enrolledAt)}
                  </p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href={`/formation/${formation.id}`}>Revoir</Link>
                  </Button>
                  <Button className="flex-1" asChild>
                    <Link href="/dashboard/certificats">Certificat</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
