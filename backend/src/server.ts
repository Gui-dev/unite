import Fastify from 'fastify'

import { createEventRoute } from './routes/create-event.route'
import { registerForEventRoute } from './routes/register-for-event.route'
import { getEventRoute } from './routes/get-event.route'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.register(createEventRoute)
app.register(registerForEventRoute)
app.register(getEventRoute)

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`❤️  Server running on port http://localhost:${PORT}`)
  })
