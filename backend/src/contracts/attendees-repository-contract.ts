import { type Attendee } from '@prisma/client'
import { type IRegisterForEventDTO } from '../dtos/register-for-event-DTO'
import { type IFindAttendeeByIdAndEmail } from '../dtos/find-attendee-DTO'

export interface IAttendeesRepositoryContract {
  create: (data: IRegisterForEventDTO) => Promise<Attendee>
  findAttendeeByIdAndEmail: (
    data: IFindAttendeeByIdAndEmail,
  ) => Promise<Attendee | null>
  amountOfAttendeesForEvent: (event_id: string) => Promise<number>
}
