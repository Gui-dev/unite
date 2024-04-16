import { type FastifyInstance } from 'fastify'
import { GetAttendeeBadgeController } from '../controllers/get-attendee-badge-controller'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  getAttendeeBadgeValidation,
  getAttendeeBadgeValidationResponse,
} from '../validations/get-attendee-badge-validation'

const getAttendeeBadgeController = new GetAttendeeBadgeController()

export const getAttendeeBadgeRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/attendees/:attendee_id/badge',
    {
      schema: {
        summary: 'Get an attendee badge',
        tags: ['attendees'],
        params: getAttendeeBadgeValidation,
        response: {
          201: getAttendeeBadgeValidationResponse,
        },
      },
    },
    getAttendeeBadgeController.show,
  )
}
