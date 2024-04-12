import { z } from 'zod'

export const checkInValidation = z.object({
  attendee_id: z.string().transform(Number),
})

const checkInValidationResponse = z.object({
  badge: z.object({
    name: z.string(),
    email: z.string().email(),
    event_title: z.string(),
    check_in_url: z.string().url(),
  }),
})

export type GetAttendeeBadgeValidationResponse = z.infer<
  typeof checkInValidationResponse
>
