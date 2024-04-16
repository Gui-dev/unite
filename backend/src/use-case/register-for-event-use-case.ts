import { type IAttendeesRepositoryContract } from '../contracts/attendees-repository-contract'
import { type IEventRepository } from '../contracts/event-repository-contract'
import { type IRegisterForEventDTO } from '../dtos/register-for-event-DTO'
import { BadRequest } from '../error/_erros/bad-request'
import { AttendeesRepository } from '../repositories/attendees-repository'
import { EventRepository } from '../repositories/events-repository'
import { type RegisterForEventValidationResponse } from './../validations/register-for-event-validation'

export class RegisterForEventUseCase {
  public readonly attendees_repository: IAttendeesRepositoryContract
  public readonly events_repository: IEventRepository

  constructor() {
    this.attendees_repository = new AttendeesRepository()
    this.events_repository = new EventRepository()
  }

  public async execute({
    name,
    email,
    event_id,
  }: IRegisterForEventDTO): Promise<RegisterForEventValidationResponse> {
    const attendee_exists =
      await this.attendees_repository.findAttendeeByIdAndEmail({
        event_id,
        email,
      })

    if (attendee_exists) {
      throw new BadRequest('This e-mail is already registered for this event')
    }

    const [event, amountOfAttendeesForEvent] = await Promise.all([
      this.events_repository.findEventById(event_id),
      this.attendees_repository.amountOfAttendeesForEvent(event_id),
    ])

    if (
      event?.maximum_attendees &&
      amountOfAttendeesForEvent >= event?.maximum_attendees
    ) {
      throw new BadRequest(
        'The maximum number of attendees for this event has been reached',
      )
    }

    const attendee = await this.attendees_repository.create({
      name,
      email,
      event_id,
    })

    if (!attendee) {
      throw new BadRequest('Error to register attendee')
    }

    return {
      attendee_id: attendee.id,
    }
  }
}
