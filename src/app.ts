import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', logger())
app.use('*', cors())

  

export default {
  port: Bun.env.PORT,
  fetch: app.fetch,
}

console.log(`App started at port http://localhost:${Bun.env.PORT}`)