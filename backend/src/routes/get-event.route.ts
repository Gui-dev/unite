import { type FastifyInstance } from 'fastify'
import { GetEventController } from '../controllers/get-event-controller'

const getEventController = new GetEventController()

export const getEventRoute = async (app: FastifyInstance): Promise<void> => {
  app.get('/events/:event_id', getEventController.show)
}
