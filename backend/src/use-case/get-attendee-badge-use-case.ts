import { type IAttendeesRepositoryContract } from '../contracts/attendees-repository-contract'
import { AttendeesRepository } from '../repositories/attendees-repository'
import { type GetAttendeeBadgeValidationResponse } from '../validations/get-attendee-badge-validation'

export class GetAttendeeBadgeUseCase {
  public readonly attendee_repository: IAttendeesRepositoryContract

  constructor() {
    this.attendee_repository = new AttendeesRepository()
  }

  public async execute(
    attendee_id: number,
  ): Promise<GetAttendeeBadgeValidationResponse> {
    const attendee_result =
      await this.attendee_repository.findAttendeeById(attendee_id)

    if (!attendee_result) {
      throw new Error('Attendee not found')
    }

    const attendee = {
      name: attendee_result.name,
      email: attendee_result.email,
      event: attendee_result.event.title,
    }

    return attendee
  }
}
