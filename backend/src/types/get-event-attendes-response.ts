import { Prisma } from '@prisma/client'

const getEventAttendeesResponse =
  Prisma.validator<Prisma.AttendeeDefaultArgs>()({
    select: {
      id: true,
      name: true,
      email: true,
      created_at: true,
      check_in: {
        select: {
          created_at: true,
        },
      },
    },
  })

export type GetEventAttendeesResponse = Prisma.AttendeeGetPayload<
  typeof getEventAttendeesResponse
>
