import { type FastifyReply, type FastifyRequest } from 'fastify'
import {
  getEventAttendeesValidationParams,
  getEventAttendeesValidationQueryParams,
} from '../validations/get-event-attendees-validation'
import { GetEvenAttendeeUsecase } from '../use-case/get-event-attendee-use-case'

export class GetEventAttendeeControler {
  public async index(
    request: FastifyRequest,
    reply: FastifyReply,
  ): Promise<FastifyReply> {
    const { event_id } = getEventAttendeesValidationParams.parse(request.params)
    const { query, page_index } = getEventAttendeesValidationQueryParams.parse(
      request.query,
    )
    const getEvenAttendeeUsecase = new GetEvenAttendeeUsecase()
    const attendees = await getEvenAttendeeUsecase.execute({
      event_id,
      query,
      page_index,
    })

    return reply.status(200).send({ attendees })
  }
}
