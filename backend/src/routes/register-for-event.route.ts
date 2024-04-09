import { type FastifyInstance } from 'fastify'
import { RegisterForEventController } from './../controllers/register-for-event-controller'

const registerForEventController = new RegisterForEventController()

export const registerForEventRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.post('/events/:event_id/attendees', registerForEventController.store)
}
