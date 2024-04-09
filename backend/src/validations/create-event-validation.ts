import z from 'zod'

export const createEventValidation = z.object({
  title: z.string().min(4),
  details: z.string().nullable(),
  maximum_attendees: z.coerce.number().int().positive().nullable(),
})
