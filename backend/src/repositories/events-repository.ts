import { type Event } from '@prisma/client'

import { type IEventRepository } from '../contracts/event-repository'
import { type ICreateEvent } from '../dtos/create-event'
import { prisma } from '../lib/prisma'
import { type GetEventValidationResponseRepository } from '../validations/get-event-validation'

export class EventRepository implements IEventRepository {
  public async findEventById(
    event_id: string,
  ): Promise<GetEventValidationResponseRepository | null> {
    const event = await prisma.event.findUnique({
      where: {
        id: event_id,
      },
      select: {
        id: true,
        title: true,
        slug: true,
        details: true,
        maximum_attendees: true,
        _count: {
          select: {
            attendees: true,
          },
        },
      },
    })

    return event
  }

  public async findEventBySlug(slug: string): Promise<Event | null> {
    const event = await prisma.event.findUnique({
      where: {
        slug,
      },
    })

    return event
  }

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
