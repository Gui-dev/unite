import { type FastifyInstance } from 'fastify'
import { GetEventAttendeeControler } from '../controllers/get-event-attendee-controller'
import { type ZodTypeProvider } from 'fastify-type-provider-zod'
import {
  getEventAttendeesValidationParams,
  getEventAttendeesValidationQueryParams,
  getEventAttendeesValidationResponseUseCase,
} from '../validations/get-event-attendees-validation'

const getEventAttendeeControler = new GetEventAttendeeControler()

export const getEventAttendeesRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/events/:event_id/attendees',
    {
      schema: {
        summary: 'Get event attendees',
        tags: ['events'],
        params: getEventAttendeesValidationParams,
        querystring: getEventAttendeesValidationQueryParams,
        response: {
          201: getEventAttendeesValidationResponseUseCase,
        },
      },
    },
    getEventAttendeeControler.index,
  )
}
