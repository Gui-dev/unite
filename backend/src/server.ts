import Fastify from 'fastify'

import { Route } from './routes'

const app = Fastify()
const PORT = 3333 || process.env.PORT

app.register(Route)

app
  .listen({
    port: PORT,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`❤️  Server running on port http://localhost:${PORT}`)
  })
