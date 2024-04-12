import Fastify from 'fastify'

import { createEventRoute } from './routes/create-event.route'
import { registerForEventRoute } from './routes/register-for-event.route'
import { getEventRoute } from './routes/get-event.route'
import { getAttendeeBadgeRoute } from './routes/get-attendee-badge.route'
import { checkInRoute } from './routes/check-in.route'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.register(createEventRoute)
app.register(registerForEventRoute)
app.register(getEventRoute)
app.register(getAttendeeBadgeRoute)
app.register(checkInRoute)

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`❤️  Server running on port http://localhost:${PORT}`)
  })
