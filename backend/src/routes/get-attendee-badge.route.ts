import { type FastifyInstance } from 'fastify'
import { GetAttendeeBadgeController } from '../controllers/get-attendee-badge-controller'

const getAttendeeBadgeController = new GetAttendeeBadgeController()

export const getAttendeeBadgeRoute = async (
  app: FastifyInstance,
): Promise<void> => {
  app.get('/attendees/:attendee_id/badge', getAttendeeBadgeController.show)
}
