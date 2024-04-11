import { type Attendee } from '@prisma/client'
import { type IRegisterForEventDTO } from '../dtos/register-for-event-DTO'
import { type IFindAttendeeByIdAndEmail } from '../dtos/find-attendee-DTO'
import { type FindAttendeeByIdResponse } from '../types/find-attendee-by-id-response'

export interface IAttendeesRepositoryContract {
  create: (data: IRegisterForEventDTO) => Promise<Attendee>
  findAttendeeByIdAndEmail: (
    data: IFindAttendeeByIdAndEmail,
  ) => Promise<Attendee | null>
  findAttendeeById: (
    attendee_id: number,
  ) => Promise<FindAttendeeByIdResponse | null>
  amountOfAttendeesForEvent: (event_id: string) => Promise<number>
}
