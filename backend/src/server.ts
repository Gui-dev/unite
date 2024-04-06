import Fastify from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { EventsRoutes } from './routes/events.route'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)
app.register(EventsRoutes)

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`❤️  Server running on port http://localhost:${PORT}`)
  })
