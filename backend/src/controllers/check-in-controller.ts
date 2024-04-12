import { type FastifyReply, type FastifyRequest } from 'fastify'
import { checkInValidation } from '../validations/check-in-validation'
import { CheckInUseCase } from '../use-case/check-in-use-case'

export class CheckInController {
  public async show(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { attendee_id } = checkInValidation.parse(request.params)
    const checkInUseCase = new CheckInUseCase()
    await checkInUseCase.execute({ attendee_id })

    return reply.status(200).send()
  }
}
