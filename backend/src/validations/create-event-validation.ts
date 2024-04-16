import z from 'zod'

export const createEventValidation = z.object({
  title: z.string().min(4),
  details: z.string().nullable(),
  maximum_attendees: z.coerce.number().int().positive().nullable(),
})

export const createEventValidationResponse = z.object({
  event_id: z.string().cuid(),
})
