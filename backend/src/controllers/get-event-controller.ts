import { type FastifyReply, type FastifyRequest } from 'fastify'

import { getEventValidationParams } from '../validations/get-event-validation'
import { GetEventUseCase } from '../use-case/get-event-use-case'

export class GetEventController {
  public async show(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { event_id } = getEventValidationParams.parse(request.params)
    const getEventUseCase = new GetEventUseCase()
    const event = await getEventUseCase.execute({ event_id })

    return reply.status(200).send({ event })
  }
}
