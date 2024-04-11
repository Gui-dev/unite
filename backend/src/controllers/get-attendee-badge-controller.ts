import { type FastifyReply, type FastifyRequest } from 'fastify'
import { getAttendeeBadgeValidation } from '../validations/get-attendee-badge-validation'
import { GetAttendeeBadgeUseCase } from '../use-case/get-attendee-badge-use-case'

export class GetAttendeeBadgeController {
  public async show(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { attendee_id } = getAttendeeBadgeValidation.parse(request.params)
    const getAttendeeBadgeUseCase = new GetAttendeeBadgeUseCase()
    const { badge } = await getAttendeeBadgeUseCase.execute(attendee_id)

    return reply.status(200).send({ badge })
  }
}
