import { type FastifyInstance } from 'fastify'

export const Route = async (app: FastifyInstance): Promise<void> => {
  app.get('/', () => {
    return 'Hello World'
  })
}
