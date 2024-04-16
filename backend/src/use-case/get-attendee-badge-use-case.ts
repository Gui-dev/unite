import { type IAttendeesRepositoryContract } from '../contracts/attendees-repository-contract'
import { BadRequest } from '../error/_erros/bad-request'
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
      throw new BadRequest('Attendee not found')
    }

    const base_url = process.env.BASE_URL
    const check_in_url = new URL(
      `/attendees/${attendee_result.id}/check-in`,
      base_url,
    )

    const attendee = {
      name: attendee_result.name,
      email: attendee_result.email,
      event_title: attendee_result.event.title,
      check_in_url: check_in_url.toString(),
    }

    return {
      badge: {
        ...attendee,
      },
    }
  }
}
