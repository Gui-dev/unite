import { z } from 'zod'

export const getEventAttendeesValidationParams = z.object({
  event_id: z.string().cuid(),
})

export const getEventAttendeesValidationQueryParams = z.object({
  query: z.string().nullish(),
  page_index: z.coerce.number().nullish(),
})

const attendeesProps = z.array(
  z.object({
    id: z.coerce.number(),
    name: z.string().min(4),
    email: z.string().email(),
    created_at: z.coerce.date(),
    check_in_at: z.date().nullable(),
  }),
)

export const getEventAttendeesValidationResponseUseCase = z.object({
  attendees: attendeesProps,
  total: z.number(),
})

export type GetEventAttendeesValidationResponseUseCase = z.infer<
  typeof getEventAttendeesValidationResponseUseCase
>
