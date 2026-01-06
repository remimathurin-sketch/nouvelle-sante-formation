import { PrismaClient } from '../lib/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Create promo codes
  await prisma.promoCode.upsert({
    where: { code: 'CPF100' },
    update: {},
    create: {
      code: 'CPF100',
      discountPercent: 100,
      active: true,
    },
  })

  await prisma.promoCode.upsert({
    where: { code: 'FREE' },
    update: {},
    create: {
      code: 'FREE',
      discountPercent: 100,
      active: true,
    },
  })

  await prisma.promoCode.upsert({
    where: { code: 'HAPPYHOUSE50' },
    update: {},
    create: {
      code: 'HAPPYHOUSE50',
      discountPercent: 50,
      active: true,
    },
  })

  // Create formations
  const formationAS = await prisma.formation.upsert({
    where: { slug: 'vae-aide-soignant' },
    update: {},
    create: {
      title: 'VAE Aide-Soignant (DEAS)',
      slug: 'vae-aide-soignant',
      description:
        "Obtenez le Diplôme d'État d'Aide-Soignant en validant votre expérience professionnelle.",
      price: 2400,
      published: true,
    },
  })

  const formationAV = await prisma.formation.upsert({
    where: { slug: 'vae-auxiliaire-de-vie' },
    update: {},
    create: {
      title: 'VAE Auxiliaire de Vie (DEAES)',
      slug: 'vae-auxiliaire-de-vie',
      description:
        "Obtenez le Diplôme d'État d'Accompagnant Éducatif et Social.",
      price: 2400,
      published: true,
    },
  })

  console.log('Created formations:', formationAS.title, formationAV.title)
  console.log('Seeding completed!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
