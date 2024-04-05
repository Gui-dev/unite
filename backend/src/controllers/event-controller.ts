import { type FastifyReply, type FastifyRequest } from 'fastify'

import { createEventValidation } from '../validations/create-event-validation'
import { CreateEventUseCase } from '../use-case/create-event-use-case'

export class EventController {
  public async store(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { title, details, maximum_attendees } = createEventValidation.parse(
      request.body,
    )
    const createEventUseCase = new CreateEventUseCase()
    const event = await createEventUseCase.execute({
      title,
      details,
      maximum_attendees,
    })

    return reply.status(201).send({ event_id: event.id })
  }
}
