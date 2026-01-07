'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { User, Mail, Phone, MapPin, Calendar, Save, Camera, Lock, Bell, Trash2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

export default function ProfilPage() {
  const { data: session } = useSession()
  const [isLoading, setIsLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    firstName: session?.user?.name?.split(' ')[0] || '',
    lastName: session?.user?.name?.split(' ').slice(1).join(' ') || '',
    email: session?.user?.email || '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    birthDate: '',
  })

  const [notifications, setNotifications] = useState({
    email: true,
    marketing: false,
    newModules: true,
    reminders: true,
  })

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = async () => {
    setIsLoading(true)
    // Simuler une sauvegarde
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    // TODO: Implémenter la sauvegarde réelle via API
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold">Mon Profil</h1>
        <p className="text-muted-foreground mt-1">
          Gérez vos informations personnelles et préférences
        </p>
      </div>

      {/* Photo de profil */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Photo de profil</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={session?.user?.image || ''} />
                <AvatarFallback className="text-2xl">
                  {getInitials(session?.user?.name)}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Formats acceptés : JPG, PNG<br />
                Taille maximale : 2 Mo
              </p>
              <Button variant="outline" className="mt-2" size="sm">
                Changer la photo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Informations personnelles */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <User className="h-5 w-5" />
            Informations personnelles
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Votre prénom"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom de famille</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Votre nom"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                className="pl-10"
                disabled
              />
            </div>
            <p className="text-xs text-muted-foreground">
              L'email ne peut pas être modifié. Contactez le support si nécessaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-10"
                  placeholder="06 12 34 56 78"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="birthDate">Date de naissance</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="birthDate"
                  name="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={handleInputChange}
                  className="pl-10"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="address">Adresse</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="pl-10"
                placeholder="Votre adresse"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="Votre ville"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="postalCode">Code postal</Label>
              <Input
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="75000"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Changement de mot de passe */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Mot de passe
          </CardTitle>
          <CardDescription>
            Modifiez votre mot de passe pour sécuriser votre compte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Mot de passe actuel</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="••••••••"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">Nouveau mot de passe</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmer</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Minimum 8 caractères, dont 1 majuscule et 1 chiffre
          </p>
          <Button variant="outline">Changer le mot de passe</Button>
        </CardContent>
      </Card>

      {/* Préférences de notifications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Notifications par email</p>
              <p className="text-xs text-muted-foreground">
                Recevoir les notifications importantes par email
              </p>
            </div>
            <Switch
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, email: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Nouveaux modules</p>
              <p className="text-xs text-muted-foreground">
                Être notifié quand un nouveau module est disponible
              </p>
            </div>
            <Switch
              checked={notifications.newModules}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, newModules: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Rappels</p>
              <p className="text-xs text-muted-foreground">
                Recevoir des rappels pour continuer ma formation
              </p>
            </div>
            <Switch
              checked={notifications.reminders}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, reminders: checked }))
              }
            />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-sm">Marketing</p>
              <p className="text-xs text-muted-foreground">
                Recevoir les actualités et offres promotionnelles
              </p>
            </div>
            <Switch
              checked={notifications.marketing}
              onCheckedChange={(checked) =>
                setNotifications(prev => ({ ...prev, marketing: checked }))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Zone danger */}
      <Card className="border-destructive/50">
        <CardHeader>
          <CardTitle className="text-lg text-destructive flex items-center gap-2">
            <Trash2 className="h-5 w-5" />
            Zone danger
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            La suppression de votre compte est irréversible. Toutes vos données,
            votre progression et vos certificats seront définitivement supprimés.
          </p>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Supprimer mon compte</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Êtes-vous sûr ?</AlertDialogTitle>
                <AlertDialogDescription>
                  Cette action est irréversible. Toutes vos données seront
                  définitivement supprimées et ne pourront pas être récupérées.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annuler</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Supprimer définitivement
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardContent>
      </Card>

      {/* Bouton de sauvegarde fixe */}
      <div className="sticky bottom-4 flex justify-end">
        <Button onClick={handleSave} disabled={isLoading} size="lg">
          <Save className="h-4 w-4 mr-2" />
          {isLoading ? 'Enregistrement...' : 'Enregistrer les modifications'}
        </Button>
      </div>
    </div>
  )
}
