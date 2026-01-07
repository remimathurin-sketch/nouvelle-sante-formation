'use client'

import { Calendar, Clock, Video, Plus, User, CheckCircle2, XCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data - À remplacer par les données réelles de la BDD
const mockUpcomingRdv = [
  {
    id: '1',
    title: 'Coaching personnalisé',
    coach: { name: 'Marie Dupont', avatar: '', role: 'Coach VAE' },
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    duration: '45 min',
    type: 'coaching',
    link: 'https://meet.google.com/xxx',
    status: 'confirmed',
  },
  {
    id: '2',
    title: 'Session Q&R - Module 3',
    coach: { name: 'Pierre Martin', avatar: '', role: 'Formateur' },
    date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    duration: '1h',
    type: 'group',
    link: 'https://meet.google.com/yyy',
    status: 'confirmed',
  },
]

const mockPastRdv = [
  {
    id: '3',
    title: 'Bilan de mi-parcours',
    coach: { name: 'Marie Dupont', avatar: '', role: 'Coach VAE' },
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    duration: '30 min',
    type: 'coaching',
    status: 'completed',
  },
  {
    id: '4',
    title: 'Atelier Livret 2',
    coach: { name: 'Sophie Bernard', avatar: '', role: 'Formatrice' },
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    duration: '1h30',
    type: 'group',
    status: 'completed',
  },
]

export default function RendezVousPage() {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }).format(date)
  }

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    }).format(date)
  }

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const isStartingSoon = (date: Date) => {
    const now = new Date()
    const diff = date.getTime() - now.getTime()
    return diff > 0 && diff <= 15 * 60 * 1000
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'coaching':
        return 'Individuel'
      case 'group':
        return 'Groupe'
      default:
        return type
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Mes Rendez-vous</h1>
          <p className="text-muted-foreground mt-1">
            Gérez vos sessions de coaching et webinaires
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Prendre rendez-vous
        </Button>
      </div>

      {/* RDV à venir */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          À venir ({mockUpcomingRdv.length})
        </h2>
        
        {mockUpcomingRdv.length === 0 ? (
          <Card className="text-center py-8">
            <CardContent>
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground/50" />
              <p className="text-muted-foreground mt-4">Aucun rendez-vous prévu</p>
              <Button className="mt-4">Planifier un RDV</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {mockUpcomingRdv.map((rdv) => (
              <Card key={rdv.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={rdv.coach.avatar} />
                        <AvatarFallback>{getInitials(rdv.coach.name)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{rdv.title}</h3>
                          <Badge variant="secondary">{getTypeLabel(rdv.type)}</Badge>
                          {isStartingSoon(rdv.date) && (
                            <Badge variant="destructive" className="animate-pulse">
                              Bientôt
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          avec {rdv.coach.name} • {rdv.coach.role}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="text-sm">
                        <p className="font-medium capitalize">{formatDate(rdv.date)}</p>
                        <p className="text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {formatTime(rdv.date)} • {rdv.duration}
                        </p>
                      </div>
                      
                      {rdv.link && (
                        <Button asChild>
                          <a href={rdv.link} target="_blank" rel="noopener noreferrer">
                            <Video className="h-4 w-4 mr-2" />
                            Rejoindre
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* RDV passés */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Historique</h2>
        <div className="space-y-3">
          {mockPastRdv.map((rdv) => (
            <Card key={rdv.id} className="bg-muted/30">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{rdv.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {rdv.coach.name} • {formatDate(rdv.date)}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Terminé
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Info */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Besoin d'aide ?</h3>
          <p className="text-sm text-muted-foreground">
            Réservez une session de coaching personnalisé avec nos formateurs experts.
            Ils sont là pour vous accompagner tout au long de votre parcours VAE.
          </p>
          <Button className="mt-4" variant="outline">
            <User className="h-4 w-4 mr-2" />
            Contacter un coach
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
