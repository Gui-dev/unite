import { type Event } from '@prisma/client'

import { type IEventRepository } from '../contracts/event-repository'
import { type ICreateEvent } from '../dtos/create-event'
import { prisma } from '../lib/prisma'

export class EventRepository implements IEventRepository {
  public async create({
    title,
    details,
    maximum_attendees,
    slug,
  }: ICreateEvent): Promise<Event> {
    const event = await prisma.event.create({
      data: {
        title,
        details,
        maximum_attendees,
        slug,
      },
    })

    return event
  }
}
