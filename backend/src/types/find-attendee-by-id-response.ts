import { Prisma } from '@prisma/client'

const findAttendeeByIdResponse = Prisma.validator<Prisma.AttendeeDefaultArgs>()(
  {
    select: {
      name: true,
      email: true,
      event: {
        select: {
          title: true,
        },
      },
    },
  },
)

export type FindAttendeeByIdResponse = Prisma.AttendeeGetPayload<
  typeof findAttendeeByIdResponse
>
