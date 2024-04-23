import { prisma } from './../src/lib/prisma'
import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client'
import dayjs from 'dayjs'

const seed = async () => {
  const event_id = 'clv21xmnd000014ijykhwdyvp'
  await prisma.event.create({
    data: {
      id: 'clv21xmnd000014ijykhwdyvp',
      title: 'Unite Summit',
      details: 'Um evento para devs apaixonados(as) por código',
      slug: 'unite-summit',
      maximum_attendees: 120,
    },
  })

  const attendeesToInsert: Prisma.AttendeeUncheckedCreateInput[] = []

  for (let i = 0; i <= 120; i++) {
    attendeesToInsert.push({
      id: 10000 + i,
      name: faker.person.fullName(),
      email: faker.internet.email().toLocaleLowerCase(),
      event_id,
      created_at: faker.date.recent({
        days: 30,
        refDate: dayjs().subtract(8, 'days').toDate(),
      }),
      check_in: faker.helpers.arrayElement<
        Prisma.CheckInUncheckedCreateNestedOneWithoutAttendeeInput | undefined
      >([
        undefined,
        {
          create: {
            created_at: faker.date.recent({ days: 7 }),
          },
        },
      ]),
    })
  }

  await Promise.all(
    attendeesToInsert.map((data) => {
      return prisma.attendee.create({
        data,
      })
    }),
  )
}

seed().then(() => {
  console.log('Database seeded!!!')
  prisma.$disconnect()
})
