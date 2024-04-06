import { type FastifyInstance } from 'fastify'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'

import { EventController } from '../controllers/event-controller'
import {
  createEventValidation,
  createEventValidationResponse,
} from '../validations/create-event-validation'

const eventController = new EventController()

export const EventsRoutes = async (app: FastifyInstance): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/events',
    {
      schema: {
        body: createEventValidation,
        response: {
          201: createEventValidationResponse,
        },
      },
    },
    eventController.store,
  )
}
