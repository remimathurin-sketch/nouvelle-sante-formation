'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useEffect, useState } from 'react'

interface TableOfContentsItem {
  id: string
  title: string
  level: number
}

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  const [toc, setToc] = useState<TableOfContentsItem[]>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Generate TOC from headings
    const headings = document.querySelectorAll('.legal-content h2, .legal-content h3')
    const items: TableOfContentsItem[] = []

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || ''
      if (!heading.id) {
        heading.id = id
      }
      items.push({
        id,
        title: heading.textContent || '',
        level: heading.tagName === 'H2' ? 2 : 3,
      })
    })

    setToc(items)

    // Intersection observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [children])

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="flex items-center gap-1 hover:text-primary">
              <Home className="h-4 w-4" />
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{title}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Table of Contents - Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="text-sm font-semibold text-foreground mb-4">
                Table des matières
              </h2>
              <nav className="space-y-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm py-1 transition-colors ${
                      item.level === 3 ? 'pl-4' : ''
                    } ${
                      activeId === item.id
                        ? 'text-primary font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {/* Header */}
              <header className="mb-8 border-b pb-6">
                <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {title}
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Dernière mise à jour : {lastUpdated}
                </p>
              </header>

              {/* Mobile TOC */}
              <div className="mb-8 lg:hidden">
                <details className="rounded-lg border bg-gray-50 p-4">
                  <summary className="cursor-pointer text-sm font-semibold">
                    Table des matières
                  </summary>
                  <nav className="mt-4 space-y-2">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-sm text-muted-foreground hover:text-foreground ${
                          item.level === 3 ? 'pl-4' : ''
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </details>
              </div>

              {/* Content */}
              <div className="legal-content prose prose-gray max-w-none">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
