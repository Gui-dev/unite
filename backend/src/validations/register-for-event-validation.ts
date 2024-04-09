import { z } from 'zod'

export const registerForEventValidationData = z.object({
  name: z.string().min(4),
  email: z.string().email(),
})

export const registerForEventValidationParams = z.object({
  event_id: z.string().cuid(),
})

export const registerForEventValidationResponse = z.object({
  attendee_id: z.coerce.number(),
})

export type RegisterForEventValidationResponse = z.infer<
  typeof registerForEventValidationResponse
>
