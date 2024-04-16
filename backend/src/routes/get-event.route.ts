import { type FastifyInstance } from 'fastify'
import { GetEventController } from '../controllers/get-event-controller'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  getEventValidationParams,
  getEventValidationResponseUseCase,
} from '../validations/get-event-validation'

const getEventController = new GetEventController()

export const getEventRoute = async (app: FastifyInstance): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/events/:event_id',
    {
      schema: {
        summary: 'Get an event',
        tags: ['events'],
        params: getEventValidationParams,
        response: {
          201: getEventValidationResponseUseCase,
        },
      },
    },
    getEventController.show,
  )
}
