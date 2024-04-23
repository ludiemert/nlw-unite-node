import { prisma } from "../src/lib/prisma";


async function seed() {
await prisma.event.create({
  data: {
    id:'6fc8ea6d-0224-4dd2-9158-229ad90cc936',
    title: 'Unite Summit',
    slug: 'unite-summit',
    details: 'Um eveto para Devs apaixonados por codigo!!!',
    maximumAttendees: 120,
  }
})
}

seed().then(() => {
  console.log('Database seeded!!!!')
  prisma.$disconnect()
})