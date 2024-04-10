import { type IEventRepository } from '../contracts/event-repository'
import { EventRepository } from '../repositories/events-repository'
import { type GetEventValidationResponseUseCase } from '../validations/get-event-validation'

interface IGetEventUseCaseProps {
  event_id: string
}

export class GetEventUseCase {
  public readonly events_repository: IEventRepository

  constructor() {
    this.events_repository = new EventRepository()
  }

  public async execute({
    event_id,
  }: IGetEventUseCaseProps): Promise<GetEventValidationResponseUseCase> {
    const event_result = await this.events_repository.findEventById(event_id)

    if (!event_result) {
      throw new Error('Event not found')
    }

    const event = {
      id: event_result?.id,
      title: event_result?.title,
      details: event_result?.details,
      slug: event_result?.slug,
      maximum_attendees: event_result?.maximum_attendees,
      attendees_amount: event_result?._count.attendees,
    }

    return event
  }
}
