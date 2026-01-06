// User types
export type UserRole = 'STUDENT' | 'ADMIN' | 'COACH'

export interface User {
  id: string
  email: string
  name: string | null
  firstName: string | null
  lastName: string | null
  role: UserRole
  image: string | null
  createdAt: Date
  updatedAt: Date
}

// Formation types
export interface Formation {
  id: string
  title: string
  description: string
  price: number
  image: string | null
  createdAt: Date
  modules?: Module[]
}

export interface Module {
  id: string
  title: string
  description: string
  order: number
  formationId: string
  unlockDelay: number
  lessons?: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  content: string | null
  videoUrl: string | null
  order: number
  moduleId: string
  duration: number
}

// Progress types
export interface Enrollment {
  id: string
  userId: string
  formationId: string
  enrolledAt: Date
  progress: number
  formation?: Formation
}

export interface LessonProgress {
  id: string
  userId: string
  lessonId: string
  completed: boolean
  completedAt: Date | null
  watchedSeconds: number
}

// Order types
export type PaymentOption = '1X' | '2X' | '3X'
export type OrderStatus = 'pending' | 'paid' | 'failed' | 'refunded'

export interface Order {
  id: string
  userId: string
  formationId: string
  amount: number
  paymentOption: PaymentOption
  promoCode: string | null
  stripeSessionId: string
  status: OrderStatus
  createdAt: Date
  updatedAt: Date
}

// Badge types
export interface Badge {
  id: string
  name: string
  description: string
  image: string
  condition: string
}

export interface UserBadge {
  id: string
  userId: string
  badgeId: string
  earnedAt: Date
  badge?: Badge
}
