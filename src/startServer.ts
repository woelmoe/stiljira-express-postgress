import express from 'express'
import { createRoutes } from './routes'
import 'dotenv/config'
import { startConnectionToDb } from './seqDatabase'
import { checkDomain } from './checkDns'

export async function startServer() {
  const app = express()
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  })

  const port = Number(process.env.PORT) || 3000

  await startConnectionToDb()

  checkDomain(app)

  createRoutes(app)

  app.listen(port, '0.0.0.0', () => {
    console.log(`[server]: new Server is running at http://localhost:${port}`)
  })
}
