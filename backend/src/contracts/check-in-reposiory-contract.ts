import { type CheckIn } from '@prisma/client'
import { type ICreateCheckInDTO } from '../dtos/create-check-in-DTO'

export interface ICheckInRepository {
  create: ({ attendee_id }: ICreateCheckInDTO) => Promise<CheckIn>
  findCheckInByAttendeeId: (attendee_id: number) => Promise<CheckIn | null>
}
