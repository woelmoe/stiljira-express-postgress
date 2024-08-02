import express from 'express'
import 'dotenv/config'
import { checkDomain } from './checkDns'
import routesTasks from './routes/routes-tasks'
import cors from './middleware/cors'
import { startConnectionToDb } from './seqDatabase'

export async function startServer() {
  const port = Number(process.env.BACK_PORT) || 3000
  const app = express()

  app.use('/', cors)
  app.use('/', routesTasks)

  checkDomain(app)

  await startConnectionToDb()

  app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: new Server is running at http://localhost:${port}`)
  })
}
