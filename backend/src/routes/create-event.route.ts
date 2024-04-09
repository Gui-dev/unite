import { type FastifyInstance } from 'fastify'

import { CreateEventController } from '../controllers/create-event-controller'
const createEventController = new CreateEventController()

export const createEventRoute = async (app: FastifyInstance): Promise<void> => {
  app.post('/events', createEventController.store)
}
