import { type FastifyInstance } from 'fastify'
import { GetEventAttendeeControler } from '../controllers/get-event-attendee-controller'

const getEventAttendeeControler = new GetEventAttendeeControler()

export const getEventAttendeesRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.get('/events/:event_id/attendees', getEventAttendeeControler.index)
}
