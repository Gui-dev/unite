import { z } from 'zod'

export const getEventValidationParams = z.object({
  event_id: z.string().cuid(),
})

export const getEventValidationResponseRepository = z.object({
  id: z.string().cuid(),
  title: z.string().min(4),
  details: z.string().nullable(),
  slug: z.string(),
  maximum_attendees: z.coerce.number().nullable(),
  _count: z.object({
    attendees: z.coerce.number(),
  }),
})

export const getEventValidationResponseUseCase = z.object({
  id: z.string().cuid(),
  title: z.string().min(4),
  details: z.string().nullable(),
  slug: z.string(),
  maximum_attendees: z.coerce.number().int().nullable(),
  attendees_amount: z.coerce.number().int(),
})

export type GetEventValidationResponseRepository = z.infer<
  typeof getEventValidationResponseRepository
>

export type GetEventValidationResponseUseCase = z.infer<
  typeof getEventValidationResponseUseCase
>
