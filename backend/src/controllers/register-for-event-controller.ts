import { type FastifyReply, type FastifyRequest } from 'fastify'
import {
  registerForEventValidationData,
  registerForEventValidationParams,
} from '../validations/register-for-event-validation'
import { RegisterForEventUseCase } from '../use-case/register-for-event-use-case'

export class RegisterForEventController {
  public async store(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { name, email } = registerForEventValidationData.parse(request.body)
    const { event_id } = registerForEventValidationParams.parse(request.params)
    const registerForEventUseCase = new RegisterForEventUseCase()
    const register_event = await registerForEventUseCase.execute({
      name,
      email,
      event_id,
    })

    return reply.status(201).send(register_event)
  }
}
