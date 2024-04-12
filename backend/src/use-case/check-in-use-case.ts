import { type ICheckInRepository } from '../contracts/check-in-reposiory-contract'
import { CheckInRepository } from '../repositories/check-in-repository'

interface ICheckInUseCase {
  attendee_id: number
}

export class CheckInUseCase {
  public readonly check_in_repository: ICheckInRepository

  constructor() {
    this.check_in_repository = new CheckInRepository()
  }

  public async execute({ attendee_id }: ICheckInUseCase): Promise<void> {
    const attendee_check_in =
      await this.check_in_repository.findCheckInByAttendeeId(attendee_id)

    if (attendee_check_in) {
      throw new Error('Attendee already checked in!')
    }

    await this.check_in_repository.create({ attendee_id })
  }
}
