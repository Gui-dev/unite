import { type FastifyInstance } from 'fastify'
import { CheckInController } from '../controllers/check-in-controller'

const checkInController = new CheckInController()

export const checkInRoute = async (app: FastifyInstance): Promise<void> => {
  app.get('/attendees/:attendee_id/check-in', checkInController.show)
}
