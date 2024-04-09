import { type Event } from '@prisma/client'
import { type ICreateEvent } from '../dtos/create-event'

export interface IEventRepository {
  create: (data: ICreateEvent) => Promise<Event>
  findEventById: (event_id: string) => Promise<Event | null>
  findEventBySlug: (slug: string) => Promise<Event | null>
}
