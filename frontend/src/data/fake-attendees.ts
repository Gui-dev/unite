import { faker } from '@faker-js/faker'

export const attendees = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    created_at: faker.date.recent({ days: 30 }),
    check_in_at: faker.date.recent({ days: 7 }),
  }
})
