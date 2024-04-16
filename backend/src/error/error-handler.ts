import { type FastifyInstance, type FastifyReply } from 'fastify'
import { BadRequest } from './_erros/bad-request'
import { ZodError } from 'zod'

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const error_handler: FastifyErrorHandler = async (
  error,
  request,
  reply,
): Promise<FastifyReply> => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Error during validation',
      errors: error.flatten().fieldErrors,
    })
  }

  if (error instanceof BadRequest) {
    return reply.status(400).send({
      message: error.message,
    })
  }

  return reply.status(500).send({
    message: 'Internnal server error',
  })
}
