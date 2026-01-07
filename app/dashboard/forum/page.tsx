'use client'

import Link from 'next/link'
import { MessageSquare, Users, Clock, Plus, TrendingUp, Pin, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Mock data - À remplacer par les données réelles de la BDD
const mockCategories = [
  { id: '1', name: 'Questions générales', count: 45, icon: '💬' },
  { id: '2', name: 'Aide VAE', count: 32, icon: '📚' },
  { id: '3', name: 'Préparation oral', count: 18, icon: '🎤' },
  { id: '4', name: 'Retours d\'expérience', count: 24, icon: '⭐' },
]

const mockRecentTopics = [
  {
    id: '1',
    title: 'Comment bien préparer son livret 2 ?',
    author: { name: 'Marie D.', avatar: '' },
    category: 'Aide VAE',
    replies: 12,
    views: 89,
    lastActivity: new Date(Date.now() - 30 * 60 * 1000),
    isPinned: true,
  },
  {
    id: '2',
    title: 'Retour sur mon passage devant le jury',
    author: { name: 'Thomas L.', avatar: '' },
    category: 'Retours d\'expérience',
    replies: 8,
    views: 56,
    lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000),
    isPinned: false,
  },
  {
    id: '3',
    title: 'Questions fréquentes posées à l\'oral',
    author: { name: 'Sophie M.', avatar: '' },
    category: 'Préparation oral',
    replies: 23,
    views: 145,
    lastActivity: new Date(Date.now() - 5 * 60 * 60 * 1000),
    isPinned: true,
  },
  {
    id: '4',
    title: 'Qui est dans la promo de janvier ?',
    author: { name: 'Julie R.', avatar: '' },
    category: 'Questions générales',
    replies: 15,
    views: 67,
    lastActivity: new Date(Date.now() - 24 * 60 * 60 * 1000),
    isPinned: false,
  },
]

export default function ForumPage() {
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

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Forum de la communauté</h1>
          <p className="text-muted-foreground mt-1">
            Échangez avec les autres apprenants et les formateurs
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Nouveau sujet
        </Button>
      </div>

      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher dans le forum..."
          className="pl-10"
        />
      </div>

      {/* Catégories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mockCategories.map((category) => (
          <Card key={category.id} className="cursor-pointer hover:border-primary/50 transition-colors">
            <CardContent className="p-4 text-center">
              <span className="text-3xl">{category.icon}</span>
              <h3 className="font-medium mt-2 text-sm">{category.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">
                {category.count} sujets
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sujets récents */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Discussions récentes
            </CardTitle>
            <Button variant="ghost" size="sm">
              Voir tout
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="divide-y">
            {mockRecentTopics.map((topic) => (
              <div key={topic.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-start gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={topic.author.avatar} />
                    <AvatarFallback>{getInitials(topic.author.name)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {topic.isPinned && (
                        <Pin className="h-4 w-4 text-primary flex-shrink-0" />
                      )}
                      <h3 className="font-medium text-sm hover:text-primary cursor-pointer truncate">
                        {topic.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {topic.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        par {topic.author.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        {topic.replies} réponses
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {topic.views} vues
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatTime(topic.lastActivity)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info communauté */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <h3 className="font-semibold mb-2">Règles de la communauté</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Soyez respectueux envers les autres membres</li>
            <li>• Posez vos questions dans la bonne catégorie</li>
            <li>• Évitez les doublons : utilisez la recherche avant de poster</li>
            <li>• Partagez vos expériences pour aider la communauté</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
