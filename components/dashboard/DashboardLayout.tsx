'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { DashboardSidebar, MobileSidebar } from './DashboardSidebar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <DashboardSidebar
          collapsed={collapsed}
          onToggle={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* Mobile sidebar */}
      <MobileSidebar />

      {/* Main content */}
      <main
        className={cn(
          'transition-all duration-300 pt-14 lg:pt-0',
          collapsed ? 'lg:pl-16' : 'lg:pl-64'
        )}
      >
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
