import express, { Express } from 'express'

export function createRoutes(app: Express) {
  const jsonParser = express.json()

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
}
