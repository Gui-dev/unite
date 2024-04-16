import { type FastifyInstance } from 'fastify'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'

import { CreateEventController } from '../controllers/create-event-controller'
import {
  createEventValidation,
  createEventValidationResponse,
} from '../validations/create-event-validation'
const createEventController = new CreateEventController()

export const createEventRoute = async (app: FastifyInstance): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().post(
    '/events',
    {
      schema: {
        summary: 'Create an event',
        tags: ['events'],
        body: createEventValidation,
        response: {
          201: createEventValidationResponse,
        },
      },
    },
    createEventController.store,
  )
}
