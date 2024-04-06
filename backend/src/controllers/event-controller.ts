import { type FastifyReply, type FastifyRequest } from 'fastify'

import { CreateEventUseCase } from '../use-case/create-event-use-case'

export class EventController {
  public async store(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    // @ts-expect-error
    const { title, details, maximum_attendees } = request.body

    const createEventUseCase = new CreateEventUseCase()
    const event = await createEventUseCase.execute({
      title,
      details,
      maximum_attendees,
    })

    return reply.status(201).send({ event_id: event.id })
  }
}
