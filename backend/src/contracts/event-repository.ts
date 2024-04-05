import { type Event } from '@prisma/client'
import { type ICreateEvent } from '../dtos/create-event'

export interface IEventRepository {
  create: (data: ICreateEvent) => Promise<Event>
}
