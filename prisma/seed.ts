/**
 * ============================================
 * SCRIPT DE SEED
 * ============================================
 *
 * Ce script peuple la base de données avec les formations.
 *
 * Pour modifier le contenu, éditez les fichiers dans /prisma/data/:
 *   - drip-config.ts : Délais de déblocage des modules
 *   - formations-config.ts : Structure des formations, modules et leçons
 *
 * Exécution: npx prisma db seed
 */

import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../lib/generated/prisma'
import { hash } from 'bcryptjs'
import { ALL_FORMATIONS } from './data/formations-config'

// Créer le client Prisma avec l'adaptateur PostgreSQL
const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Starting seed...')
  console.log('')

  // ============================================
  // NETTOYAGE DES DONNÉES EXISTANTES
  // ============================================
  await prisma.lessonProgress.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.module.deleteMany()
  await prisma.order.deleteMany()
  await prisma.formation.deleteMany()
  await prisma.userBadge.deleteMany()
  await prisma.badge.deleteMany()
  await prisma.promoCode.deleteMany()

  console.log('🗑️  Cleaned existing data')

  // ============================================
  // CRÉATION DES FORMATIONS
  // ============================================
  const createdFormations: { id: string; title: string }[] = []

  for (const formationConfig of ALL_FORMATIONS) {
    const formation = await prisma.formation.create({
      data: {
        title: formationConfig.title,
        slug: formationConfig.slug,
        description: formationConfig.description,
        price: formationConfig.price,
        image: formationConfig.image,
        published: true,
        modules: {
          create: formationConfig.modules.map((moduleConfig, moduleIndex) => ({
            title: moduleConfig.title,
            emoji: moduleConfig.emoji,
            description: moduleConfig.description,
            order: moduleIndex,
            unlockDelay: moduleConfig.unlockDelay,
            lessons: {
              create: moduleConfig.lessons.map((lessonConfig, lessonIndex) => ({
                title: lessonConfig.title,
                order: lessonIndex + 1,
                duration: lessonConfig.duration || 300,
                videoUrl: lessonConfig.videoUrl || null,
              })),
            },
          })),
        },
      },
    })

    createdFormations.push({ id: formation.id, title: formation.title })
    
    const totalLessons = formationConfig.modules.reduce(
      (acc, m) => acc + m.lessons.length, 0
    )
    console.log(`✅ ${formation.title}`)
    console.log(`   └── ${formationConfig.modules.length} modules, ${totalLessons} leçons`)
  }

  // ============================================
  // BADGES
  // ============================================
  const badges = await prisma.badge.createMany({
    data: [
      { name: 'Premier pas', description: 'Tu as complété ta première leçon', image: '🎯', condition: 'complete_first_lesson' },
      { name: 'Semaine de feu', description: '7 jours consécutifs de connexion', image: '🔥', condition: 'login_streak_7' },
      { name: 'Module terminé', description: 'Tu as terminé un module complet', image: '🏆', condition: 'complete_first_module' },
      { name: 'Étoile montante', description: 'Tu as atteint 500 points', image: '⭐', condition: 'reach_500_points' },
      { name: 'Champion', description: 'Tu as atteint 1000 points', image: '🏅', condition: 'reach_1000_points' },
      { name: 'Social', description: 'Tu as posté 5 messages sur le forum', image: '💬', condition: 'post_5_messages' },
      { name: 'Assidu', description: '30 jours consécutifs de connexion', image: '📅', condition: 'login_streak_30' },
      { name: 'Expert VAE', description: 'Tu as terminé 100% d\'une formation', image: '🎓', condition: 'complete_formation' },
    ],
  })

  console.log(`✅ ${badges.count} badges créés`)

  // ============================================
  // CODES PROMO
  // ============================================
  const promoCodes = await prisma.promoCode.createMany({
    data: [
      { code: 'CPF100', discountPercent: 100, active: true },
      { code: 'FREE', discountPercent: 100, active: true },
      { code: 'HAPPYHOUSE50', discountPercent: 50, active: true },
      { code: 'BIENVENUE10', discountPercent: 10, maxUses: 100, active: true },
    ],
  })

  console.log(`✅ ${promoCodes.count} codes promo créés`)

  // ============================================
  // UTILISATEUR ADMIN
  // ============================================
  const adminPassword = await hash('Admin123!', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@nouvelle-sante-formation.fr' },
    update: {},
    create: {
      email: 'admin@nouvelle-sante-formation.fr',
      name: 'Admin NSF',
      firstName: 'Admin',
      lastName: 'NSF',
      password: adminPassword,
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  })

  console.log(`✅ Admin: ${admin.email}`)

  // ============================================
  // UTILISATEUR TEST (développement)
  // ============================================
  if (createdFormations.length > 0) {
    const studentPassword = await hash('Student123!', 12)
    const student = await prisma.user.upsert({
      where: { email: 'etudiant@test.fr' },
      update: {},
      create: {
        email: 'etudiant@test.fr',
        name: 'Marie Martin',
        firstName: 'Marie',
        lastName: 'Martin',
        password: studentPassword,
        role: 'STUDENT',
        emailVerified: new Date(),
        enrollments: {
          create: {
            formationId: createdFormations[0].id,
            progress: 25,
          },
        },
      },
    })

    // Ajouter progression sur quelques leçons
    const firstModule = await prisma.module.findFirst({
      where: { formationId: createdFormations[0].id, order: 0 },
      include: { lessons: { orderBy: { order: 'asc' } } },
    })

    if (firstModule) {
      for (const lesson of firstModule.lessons.slice(0, 5)) {
        await prisma.lessonProgress.create({
          data: {
            userId: student.id,
            lessonId: lesson.id,
            completed: true,
            completedAt: new Date(),
          },
        })
      }
    }

    console.log(`✅ Étudiant test: ${student.email}`)
  }

  // ============================================
  // RÉSUMÉ
  // ============================================
  console.log('')
  console.log('═══════════════════════════════════════')
  console.log('🎉 Seed terminé avec succès !')
  console.log('═══════════════════════════════════════')
  console.log('')
  console.log('📊 Résumé:')
  console.log(`   • ${createdFormations.length} formations`)
  console.log(`   • ${badges.count} badges`)
  console.log(`   • ${promoCodes.count} codes promo`)
  console.log('')
  console.log('👤 Comptes de test:')
  console.log('   • Admin: admin@nouvelle-sante-formation.fr / Admin123!')
  console.log('   • Étudiant: etudiant@test.fr / Student123!')
  console.log('')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
