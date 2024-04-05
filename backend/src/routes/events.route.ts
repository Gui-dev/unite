import { type FastifyInstance } from 'fastify'

import { EventController } from '../controllers/event-controller'

const eventController = new EventController()

export const EventsRoutes = async (app: FastifyInstance): Promise<void> => {
  app.post('/events', eventController.store)
}
