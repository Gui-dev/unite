import { type FastifyInstance } from 'fastify'
import { CheckInController } from '../controllers/check-in-controller'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  checkInValidation,
  checkInValidationResponse,
} from '../validations/check-in-validation'

const checkInController = new CheckInController()

export const checkInRoute = async (app: FastifyInstance): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/attendees/:attendee_id/check-in',
    {
      schema: {
        summary: 'Check in an attendee',
        tags: ['check-ins'],
        params: checkInValidation,
        response: {
          201: checkInValidationResponse,
        },
      },
    },
    checkInController.show,
  )
}
