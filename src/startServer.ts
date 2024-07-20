import express from 'express'
import vhost from 'vhost'
import { createRoutes } from './routes'
import 'dotenv/config'
import { startConnectionToDb } from './seqDatabase'
import { checkDomain } from './checkDns'

const dns = (process.env.PG_DNS_ADDR ?? 'localhost') + '.localhost'
export async function startServer() {
  const app = express()
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next()
  })

  const appDns = express.Router()
  app.use(vhost(dns, appDns))

  const port = process.env.PORT || 3000

  await startConnectionToDb()

  checkDomain(app)

  createRoutes(app)

  app.listen(port, () => {
    console.log(`[server]: new Server is running at http://${dns}:${port}`)
  })
}
