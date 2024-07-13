import express from 'express'
import path from 'node:path'
import * as fs from 'fs'

export async function startServer() {
  const app = express()
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Credentials', true)
    // Помните, использование звёздочек в качестве маски может быть рискованным.
    next()
  })
  const jsonParser = express.json()

  const port = process.env.PORT || 3000

  app.get('/tasks', (req, res) => {
    res.send(200)
  })

  app.post('/tasks', jsonParser, (req, res) => {
    const newTask = req.body
    res.send(200)
  })

  app.post('/tasks/put', jsonParser, (req, res) => {
    const editedTask = req.body
    res.send(200)
  })

  app.post('/tasks/delete', jsonParser, (req, res) => {
    const { id } = req.body
    console.log(id)
    res.send(200)
  })

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`)
  })
}
