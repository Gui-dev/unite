import { z } from 'zod'

export const getEventAttendeesValidationParams = z.object({
  event_id: z.string().cuid(),
})

export const getEventAttendeesValidationQueryParams = z.object({
  query: z.string().nullish(),
  page_index: z.string().nullish().default('0').transform(Number),
})

export const getEventAttendeesValidationResponseUseCase = z.object({
  id: z.coerce.number(),
  name: z.string().min(4),
  email: z.string().email(),
  created_at: z.coerce.date(),
  check_in_at: z.date().nullable(),
})

export type GetEventAttendeesValidationResponseUseCase = z.infer<
  typeof getEventAttendeesValidationResponseUseCase
>
