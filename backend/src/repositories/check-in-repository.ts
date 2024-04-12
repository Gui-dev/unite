import { type CheckIn } from '@prisma/client'
import { type ICheckInRepository } from '../contracts/check-in-reposiory-contract'
import { prisma } from '../lib/prisma'
import { type ICreateCheckInDTO } from '../dtos/create-check-in-DTO'

export class CheckInRepository implements ICheckInRepository {
  public async findCheckInByAttendeeId(
    attendee_id: number,
  ): Promise<CheckIn | null> {
    const check_in = await prisma.checkIn.findUnique({
      where: {
        attendee_id,
      },
    })

    return check_in
  }

  public async create({ attendee_id }: ICreateCheckInDTO): Promise<CheckIn> {
    const check_in = await prisma.checkIn.create({
      data: {
        attendee_id,
      },
    })

    return check_in
  }
}
