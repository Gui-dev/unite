import Fastify from 'fastify'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform,
} from 'fastify-type-provider-zod'

import { createEventRoute } from './routes/create-event.route'
import { registerForEventRoute } from './routes/register-for-event.route'
import { getEventRoute } from './routes/get-event.route'
import { getAttendeeBadgeRoute } from './routes/get-attendee-badge.route'
import { checkInRoute } from './routes/check-in.route'
import { getEventAttendeesRoute } from './routes/get-event-attendees.route'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  swagger: {
    consumes: ['application/json'],
    produces: ['application/json'],
    info: {
      title: 'pass.in',
      description: 'Especificações da API para o backend da aplicação pass.in',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
})

app.register(createEventRoute)
app.register(registerForEventRoute)
app.register(getEventRoute)
app.register(getAttendeeBadgeRoute)
app.register(checkInRoute)
app.register(getEventAttendeesRoute)

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`❤️  Server running on port http://localhost:${PORT}`)
  })
