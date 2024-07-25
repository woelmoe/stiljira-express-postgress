import express from 'express'
import 'dotenv/config'
import { checkDomain } from './checkDns'
import taskRouter from './routes/taskRouter'

export async function startServer() {
  const app = express()
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  })

  app.use('/', taskRouter)
  const port = Number(process.env.VITE_BACK_PORT) || 3000

  checkDomain(app)

  app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: new Server is running at http://localhost:${port}`)
  })
}
