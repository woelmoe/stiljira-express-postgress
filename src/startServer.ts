import express from 'express'
import { createRoutes } from './routes'
import 'dotenv/config'
import { startConnectionToDb } from './seqDatabase'

export async function startServer() {
  const app = express()
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  })

  const port = process.env.PORT || 3000

  await startConnectionToDb()

  createRoutes(app)

  app.listen(port, () => {
    console.log(`[server]: new Server is running at http://localhost:${port}`)
  })
}
