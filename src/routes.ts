import express, { Express } from 'express'
import { createTask, deleteTask, getTasks, updateTask } from './controllers'

export function createRoutes(app: Express) {
  const jsonParser = express.json()

  app.get('/tasks', getTasks)

  app.post('/tasks', jsonParser, (req, res, next) => {
    createTask({ req, res, next })
  })

  app.post('/tasks/put', jsonParser, (req, res, next) => {
    updateTask({ req, res, next })
  })

  app.post('/tasks/delete', jsonParser, (req, res, next) => {
    deleteTask({ req, res, next })
  })
}
