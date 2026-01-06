import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LogoutButton } from "@/components/auth/LogoutButton"
import Link from "next/link"

export const metadata = {
  title: "Dashboard | Nouvelle Santé Formation",
  description: "Votre espace membre",
}

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/login")
  }

  const user = session.user

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Bonjour {user.firstName || user.name || "!"} 👋
        </h1>
        <p className="text-muted-foreground mt-2">
          Bienvenue dans votre espace membre
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Mes formations</CardTitle>
            <CardDescription>Accédez à vos formations en cours</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Vous n'avez pas encore de formation active.
            </p>
            <Link href="/">
              <Button variant="outline" size="sm">
                Découvrir nos formations
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Mon profil</CardTitle>
            <CardDescription>Gérez vos informations personnelles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <p><span className="text-muted-foreground">Email:</span> {user.email}</p>
              <p><span className="text-muted-foreground">Rôle:</span> {user.role}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aide</CardTitle>
            <CardDescription>Besoin d'assistance ?</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Notre équipe est là pour vous aider.
            </p>
            <Button variant="outline" size="sm">
              Nous contacter
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <LogoutButton />
      </div>
    </div>
  )
}
