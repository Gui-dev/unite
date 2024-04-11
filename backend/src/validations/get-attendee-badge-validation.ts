import { z } from 'zod'

export const getAttendeeBadgeValidation = z.object({
  attendee_id: z.string().transform(Number),
})

export const getAttendeeBadgeValidationResponse = z.object({
  name: z.string(),
  email: z.string().email(),
})

export type GetAttendeeBadgeValidationResponse = z.infer<
  typeof getAttendeeBadgeValidationResponse
>
