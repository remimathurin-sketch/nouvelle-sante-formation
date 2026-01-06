# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Nouvelle Santé Formation** - Plateforme LMS pour la VAE (Validation des Acquis de l'Expérience) dans le secteur santé.

Formations proposées :
- VAE Aide-Soignant (DEAS)
- VAE Auxiliaire de Vie (DEAES)

## Tech Stack

- **Framework** : Next.js 14+ (App Router)
- **Language** : TypeScript (strict mode)
- **Styling** : Tailwind CSS + Shadcn/ui
- **Database** : PostgreSQL + Prisma ORM
- **Auth** : NextAuth.js v5 (Auth.js)
- **Payments** : Stripe (checkout, webhooks, subscriptions)
- **Icons** : Lucide React
- **Animations** : Framer Motion

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:3000)
npm run build        # Production build
npm run lint         # ESLint

# Prisma
npx prisma generate  # Generate Prisma client
npx prisma db push   # Push schema to database
npx prisma studio    # Open Prisma Studio GUI
npx prisma migrate dev --name <name>  # Create migration

# Stripe webhooks (dev)
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

## Project Structure

```
app/
├── (auth)/                 # Auth pages (login, register, reset-password)
├── (legal)/                # Legal pages (mentions, CGV, CGU, privacy)
├── dashboard/              # Protected student area
│   ├── formations/         # My formations
│   ├── mon-parcours/       # Progress timeline
│   ├── profil/             # User profile
│   ├── badges/             # Earned badges
│   └── forum/              # Community forum
├── formation/[id]/         # Formation view with modules
│   └── lesson/[lessonId]/  # Lesson with video player
├── admin/                  # Admin dashboard
├── api/                    # API routes
│   ├── auth/               # NextAuth handlers
│   ├── checkout/           # Stripe checkout
│   ├── webhooks/stripe/    # Stripe webhooks
│   └── user/               # User management
└── page.tsx                # Landing page

components/
├── ui/                     # Shadcn/ui components
├── layout/                 # Header, Footer, Sidebar
├── landing/                # Landing page sections
├── forms/                  # Form components
└── dashboard/              # Dashboard components

lib/
├── db.ts                   # Prisma client singleton
├── auth.ts                 # NextAuth configuration
├── stripe.ts               # Stripe utilities
└── utils.ts                # Helpers

prisma/
└── schema.prisma           # Database schema
```

## Key Data Models

```prisma
User          # Users with roles (STUDENT, ADMIN, COACH)
Formation     # Courses (title, description, price)
Module        # Course modules with unlockDelay (drip content)
Lesson        # Video lessons with resources
Enrollment    # User-Formation relationship
LessonProgress # Track video completion (90% = completed)
Order         # Stripe payments
Badge         # Gamification badges
UserBadge     # Earned badges
```

## Design System

**Color palette:**
- Primary: `#8B5CF6` (violet)
- Secondary: `#F3E8FF` (rose pâle)
- Accent: `#6D28D9` (violet foncé)

**Typography:** Inter (system sans-serif fallback)

## Key Features

### Drip Content
Modules unlock based on `unlockDelay` days after enrollment date:
```ts
const unlockDate = addDays(enrollment.enrolledAt, module.unlockDelay)
const isUnlocked = new Date() >= unlockDate
```

### Video Progress Tracking
Mark lesson as completed when 90% watched. Save `watchedSeconds` for resume functionality.

### Promo Codes
- `CPF100` : 100% discount
- `FREE` : 100% discount
- `HAPPYHOUSE50` : 50% discount

### User Roles
- `STUDENT` : Access to enrolled formations
- `COACH` : Can access forum moderation
- `ADMIN` : Full admin dashboard access

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="..."

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

## Routes Summary

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/login`, `/register` | Authentication |
| `/deviens-aide-soignant-ou-auxiliaire-de-vie` | Eligibility test |
| `/tu-es-eligible` | Eligible result |
| `/page-de-paiement-aide-soignant` | Payment page DEAS |
| `/page-de-paiement-auxiliaire-de-vie` | Payment page DEAES |
| `/merci-pour-ton-paiement-*` | Thank you pages |
| `/dashboard` | Student dashboard |
| `/formation/[id]` | Formation view |
| `/admin` | Admin dashboard |

## Conventions

- Use Server Components by default, Client Components only when needed
- Validate forms with Zod
- Use Prisma for all database operations
- Toast notifications for user feedback
- All routes under `/dashboard` and `/admin` require authentication
- French language for UI content
