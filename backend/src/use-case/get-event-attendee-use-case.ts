import { type IAttendeesRepositoryContract } from '../contracts/attendees-repository-contract'
import { AttendeesRepository } from '../repositories/attendees-repository'
import { type IGetEventAttendeesDTO } from '../dtos/get-event-attendees-DTO'
import { type GetEventAttendeesValidationResponseUseCase } from '../validations/get-event-attendees-validation'

export class GetEvenAttendeeUsecase {
  public readonly attendees_repository: IAttendeesRepositoryContract

  constructor() {
    this.attendees_repository = new AttendeesRepository()
  }

  public async execute({
    event_id,
    query,
    page_index,
  }: IGetEventAttendeesDTO): Promise<GetEventAttendeesValidationResponseUseCase> {
    const [attendees_result, total] = await Promise.all([
      this.attendees_repository.find({
        event_id,
        query,
        page_index,
      }),
      this.attendees_repository.amountOfAttendeesForEvent(event_id),
    ])

    const attendees = attendees_result.map((attendee) => {
      return {
        id: attendee.id,
        name: attendee.name,
        email: attendee.email,
        created_at: attendee.created_at,
        check_in_at: attendee.check_in?.created_at ?? null,
      }
    })

    return {
      attendees,
      total,
    }
  }
}
