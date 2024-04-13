import { type Event } from '@prisma/client'
import { type ICreateEvent } from '../dtos/create-event'
import { type GetEventValidationResponseRepository } from '../validations/get-event-validation'

export interface IEventRepository {
  create: (data: ICreateEvent) => Promise<Event>
  findEventById: (
    event_id: string,
  ) => Promise<GetEventValidationResponseRepository | null>
  findEventBySlug: (slug: string) => Promise<Event | null>
}
