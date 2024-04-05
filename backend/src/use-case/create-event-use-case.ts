import { type Event } from '@prisma/client'

import { type ICreateEvent } from '../dtos/create-event'
import { type IEventRepository } from '../contracts/event-repository'
import { EventRepository } from '../repositories/events-repository'

export class CreateEventUseCase {
  public eventRepository: IEventRepository
  constructor() {
    this.eventRepository = new EventRepository()
  }

  public async execute({
    title,
    details,
    maximum_attendees,
  }: Omit<ICreateEvent, 'slug'>): Promise<Event> {
    const event = await this.eventRepository.create({
      title,
      details,
      maximum_attendees,
      slug: new Date().toISOString(),
    })

    return event
  }
}
