import { type Event } from '@prisma/client'

import { type ICreateEvent } from '../dtos/create-event'
import { type IEventRepository } from '../contracts/event-repository-contract'
import { EventRepository } from '../repositories/events-repository'
import { slugify } from '../utils/generate-slug'

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
    const slug = slugify(title)
    const event_with_same_slug =
      await this.eventRepository.findEventBySlug(slug)

    if (event_with_same_slug) {
      throw new Error('Another event  with same title already exists')
    }

    const event = await this.eventRepository.create({
      title,
      details,
      maximum_attendees,
      slug,
    })

    if (!event) {
      throw new Error('Something wrong to create a event')
    }

    return event
  }
}
