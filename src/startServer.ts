import express from 'express'
import 'dotenv/config'
import { checkDomain } from './checkDns'
import taskRouter from './routes/taskRouter'
import cors from './utils/cors'

export async function startServer() {
  const port = Number(process.env.VITE_BACK_PORT) || 3000
  const app = express()

  app.use('/', cors)
  app.use('/', taskRouter)

  checkDomain(app)

  app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: new Server is running at http://localhost:${port}`)
  })
}
