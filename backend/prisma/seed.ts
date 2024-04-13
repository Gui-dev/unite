import { prisma } from './../src/lib/prisma'

const seed = async () => {
  await prisma.event.create({
    data: {
      id: 'cluwdw9mf000008lbf9ns6b7h',
      title: 'Unite Summit',
      details: 'Um evento para devs apaixonados(as) por código',
      slug: 'unite-summit',
      maximum_attendees: 120,
    },
  })
}

seed().then(() => {
  console.log('Database seeded!!!')
  prisma.$disconnect()
})
