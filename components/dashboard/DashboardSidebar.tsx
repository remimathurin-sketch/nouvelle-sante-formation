'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import {
  LayoutDashboard,
  BookOpen,
  Route,
  Award,
  Trophy,
  MessageSquare,
  Calendar,
  User,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { LogoutButton } from '@/components/auth/LogoutButton'

const navigation = [
  { name: 'Vue d\'ensemble', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Mes formations', href: '/dashboard/formations', icon: BookOpen },
  { name: 'Mon parcours', href: '/dashboard/parcours', icon: Route },
  { name: 'Mes certificats', href: '/dashboard/certificats', icon: Award },
  { name: 'Mes badges', href: '/dashboard/badges', icon: Trophy },
  { name: 'Forum', href: '/dashboard/forum', icon: MessageSquare },
  { name: 'Prendre RDV', href: '/dashboard/rdv', icon: Calendar },
  { name: 'Mon profil', href: '/dashboard/profil', icon: User },
]

interface DashboardSidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function DashboardSidebar({ collapsed, onToggle }: DashboardSidebarProps) {
  const pathname = usePathname()
  const { data: session } = useSession()

  const getInitials = () => {
    if (session?.user?.firstName && session?.user?.lastName) {
      return `${session.user.firstName[0]}${session.user.lastName[0]}`.toUpperCase()
    }
    if (session?.user?.name) {
      return session.user.name.slice(0, 2).toUpperCase()
    }
    return 'U'
  }

  const getDisplayName = () => {
    if (session?.user?.firstName && session?.user?.lastName) {
      return `${session.user.firstName} ${session.user.lastName}`
    }
    if (session?.user?.name) {
      return session.user.name
    }
    return 'Utilisateur'
  }

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-50 flex flex-col bg-white border-r transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">NSF</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn(collapsed && 'mx-auto')}
        >
          <ChevronLeft
            className={cn(
              'h-5 w-5 transition-transform',
              collapsed && 'rotate-180'
            )}
          />
        </Button>
      </div>

      {/* User info */}
      <div className={cn('p-4 border-b', collapsed && 'flex justify-center')}>
        {collapsed ? (
          <Avatar className="h-10 w-10">
            <AvatarImage src={session?.user?.image || undefined} />
            <AvatarFallback className="bg-violet-100 text-violet-700">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session?.user?.image || undefined} />
              <AvatarFallback className="bg-violet-100 text-violet-700">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{getDisplayName()}</p>
              <p className="text-xs text-muted-foreground truncate">
                {session?.user?.email}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                collapsed && 'justify-center px-2'
              )}
              title={collapsed ? item.name : undefined}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className={cn('p-2 border-t', collapsed && 'flex justify-center')}>
        {collapsed ? (
          <LogoutButton variant="ghost" size="icon" />
        ) : (
          <LogoutButton variant="ghost" className="w-full justify-start" />
        )}
      </div>
    </aside>
  )
}

// Mobile sidebar
export function MobileSidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { data: session } = useSession()

  const getInitials = () => {
    if (session?.user?.firstName && session?.user?.lastName) {
      return `${session.user.firstName[0]}${session.user.lastName[0]}`.toUpperCase()
    }
    return 'U'
  }

  return (
    <>
      {/* Mobile header */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-14 px-4 bg-white border-b lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">NSF</span>
        </Link>
        <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 lg:hidden',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">NSF</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* User info */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={session?.user?.image || undefined} />
              <AvatarFallback className="bg-violet-100 text-violet-700">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {session?.user?.firstName || session?.user?.name || 'Utilisateur'}
              </p>
              <p className="text-xs text-muted-foreground truncate">
                {session?.user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Logout */}
        <div className="p-2 border-t">
          <LogoutButton variant="ghost" className="w-full justify-start" />
        </div>
      </div>
    </>
  )
}
