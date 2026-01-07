import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'
import { DashboardLayout } from '@/components/dashboard'

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect('/connexion?callbackUrl=/dashboard')
  }

  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
