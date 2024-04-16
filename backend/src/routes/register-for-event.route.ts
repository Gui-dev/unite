import { type FastifyInstance } from 'fastify'
import { RegisterForEventController } from './../controllers/register-for-event-controller'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  registerForEventValidationData,
  registerForEventValidationParams,
  registerForEventValidationResponse,
} from '../validations/register-for-event-validation'

const registerForEventController = new RegisterForEventController()

export const registerForEventRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/events/:event_id/attendees',
    {
      schema: {
        summary: 'Register an attendee',
        tags: ['attendees'],
        body: registerForEventValidationData,
        params: registerForEventValidationParams,
        response: {
          201: registerForEventValidationResponse,
        },
      },
    },
    registerForEventController.store,
  )
}
