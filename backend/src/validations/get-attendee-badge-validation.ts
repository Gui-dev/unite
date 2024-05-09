import { z } from 'zod'

export const getAttendeeBadgeValidation = z.object({
  attendee_id: z.coerce.number().int(),
})

export const getAttendeeBadgeValidationResponse = z.object({
  badge: z.object({
    id: z.number().int(),
    name: z.string(),
    email: z.string().email(),
    event_title: z.string(),
    check_in_url: z.string().url(),
  }),
})

export type GetAttendeeBadgeValidationResponse = z.infer<
  typeof getAttendeeBadgeValidationResponse
>
