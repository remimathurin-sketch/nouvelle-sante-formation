'use client'

import { useSession } from 'next-auth/react'
import { BookOpen, Clock, Trophy, Star } from 'lucide-react'
import {
  WelcomeCard,
  StatsCard,
  ProgressCard,
  ModuleCard,
  ActivityFeed,
  UpcomingWebinars,
  BadgeCard,
} from '@/components/dashboard'

// Mock data - À remplacer par les données réelles de la BDD
const mockStats = {
  formations: 2,
  modulesCompleted: 12,
  totalModules: 24,
  points: 1250,
  level: 'Intermédiaire',
}

const mockModules = [
  {
    id: '1',
    title: 'Module 3: Les soins d\'hygiène',
    description: 'Apprenez les techniques de soins d\'hygiène et de confort',
    progress: 75,
    status: 'in-progress' as const,
    duration: '2h30',
    formationId: 'formation-1',
  },
  {
    id: '2',
    title: 'Module 4: Accompagnement de la vie quotidienne',
    description: 'Techniques d\'accompagnement dans les actes de la vie quotidienne',
    progress: 0,
    status: 'locked' as const,
    duration: '3h00',
    formationId: 'formation-1',
    unlockDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: '3',
    title: 'Module 2: Communication professionnelle',
    description: 'Les bases de la communication avec les patients et l\'équipe',
    progress: 100,
    status: 'completed' as const,
    duration: '2h00',
    formationId: 'formation-1',
  },
]

const mockActivities = [
  {
    id: '1',
    type: 'lesson' as const,
    title: 'Leçon terminée: Hygiène des mains',
    description: 'Module 3 - Les soins d\'hygiène',
    timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 min ago
  },
  {
    id: '2',
    type: 'badge' as const,
    title: 'Badge obtenu: Première semaine',
    description: 'Félicitations pour votre première semaine !',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: '3',
    type: 'forum' as const,
    title: 'Nouvelle réponse à votre question',
    description: 'Forum - Questions générales',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: '4',
    type: 'event' as const,
    title: 'Webinaire programmé',
    description: 'Questions/Réponses avec un formateur',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
  },
]

const mockWebinars = [
  {
    id: '1',
    title: 'Session Q&R - Module 3',
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // In 2 days
    duration: '1h00',
    host: 'Marie Dupont',
    link: 'https://meet.google.com/xxx',
  },
  {
    id: '2',
    title: 'Atelier pratique: Étude de cas',
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // In 5 days
    duration: '1h30',
    host: 'Pierre Martin',
    link: 'https://meet.google.com/yyy',
  },
]

const mockBadges = [
  {
    id: '1',
    name: 'Premier pas',
    description: 'Première leçon complétée',
    image: '🎯',
    earnedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    name: 'Semaine complète',
    description: '7 jours consécutifs de connexion',
    image: '🔥',
    earnedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
  },
  {
    id: '3',
    name: 'Module terminé',
    description: 'Premier module complété à 100%',
    image: '🏆',
    earnedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
  },
  {
    id: '4',
    name: 'Expert',
    description: 'Tous les quiz réussis du premier coup',
    image: '⭐',
    isLocked: true,
  },
]

export default function DashboardPage() {
  const { data: session } = useSession()
  const firstName = session?.user?.name?.split(' ')[0] || 'Étudiant'

  const progressPercentage = Math.round(
    (mockStats.modulesCompleted / mockStats.totalModules) * 100
  )

  return (
    <div className="space-y-6">
      {/* Section 1: Bienvenue */}
      <WelcomeCard firstName={firstName} />

      {/* Section 2: Statistiques rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          title="Formations"
          value={mockStats.formations}
          icon={BookOpen}
          description="en cours"
        />
        <StatsCard
          title="Modules"
          value={`${mockStats.modulesCompleted}/${mockStats.totalModules}`}
          icon={Clock}
          description="complétés"
          trend={{ value: 25, isPositive: true }}
        />
        <StatsCard
          title="Points"
          value={mockStats.points.toLocaleString('fr-FR')}
          icon={Star}
          description="gagnés"
          trend={{ value: 150, isPositive: true }}
        />
        <StatsCard
          title="Niveau"
          value={mockStats.level}
          icon={Trophy}
          description="actuel"
        />
      </div>

      {/* Section 3: Progression globale */}
      <ProgressCard
        title="Progression globale"
        current={mockStats.modulesCompleted}
        total={mockStats.totalModules}
        label={`${mockStats.modulesCompleted} modules sur ${mockStats.totalModules} complétés`}
      />

      {/* Section 4 & 5 & 6: Layout à 3 colonnes sur desktop */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Section 4: Prochains modules */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold">Continuez votre parcours</h2>
          <div className="space-y-4">
            {mockModules
              .sort((a, b) => {
                const order = { 'in-progress': 0, locked: 1, completed: 2 }
                return order[a.status] - order[b.status]
              })
              .slice(0, 3)
              .map((module) => (
                <ModuleCard
                  key={module.id}
                  {...module}
                />
              ))}
          </div>
        </div>

        {/* Section 5 & 6: Sidebar droite */}
        <div className="space-y-6">
          {/* Section 5: Activité récente */}
          <ActivityFeed activities={mockActivities} />

          {/* Section 6: Prochains webinaires */}
          <UpcomingWebinars webinars={mockWebinars} />
        </div>
      </div>

      {/* Section 7: Mes badges récents */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Mes badges</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mockBadges.map((badge) => (
            <BadgeCard
              key={badge.id}
              name={badge.name}
              description={badge.description}
              image={badge.image}
              earnedAt={badge.earnedAt}
              isLocked={badge.isLocked}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
