import { type Attendee } from '@prisma/client'
import { type IAttendeesRepositoryContract } from '../contracts/attendees-repository-contract'
import { type IRegisterForEventDTO } from '../dtos/register-for-event-DTO'
import { prisma } from '../lib/prisma'
import { type IFindAttendeeByIdAndEmail } from '../dtos/find-attendee-DTO'

export class AttendeesRepository implements IAttendeesRepositoryContract {
  public async findAttendeeByIdAndEmail({
    event_id,
    email,
  }: IFindAttendeeByIdAndEmail): Promise<Attendee | null> {
    const attendee = await prisma.attendee.findUnique({
      where: {
        event_id_email: {
          event_id,
          email,
        },
      },
    })

    return attendee
  }

  public async amountOfAttendeesForEvent(event_id: string): Promise<number> {
    const amountOfAttendees = await prisma.attendee.count({
      where: {
        event_id,
      },
    })

    return amountOfAttendees
  }

  public async create({
    name,
    email,
    event_id,
  }: IRegisterForEventDTO): Promise<Attendee> {
    const attendee = await prisma.attendee.create({
      data: {
        name,
        email,
        event_id,
      },
    })

    return attendee
  }
}
