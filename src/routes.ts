import express, { Express } from 'express'
import { createTask, deleteTask, getTasks, updateTask } from './controllers'

export function createRoutes(app: Express) {
  const jsonParser = express.json()

  app.get('/tasks', getTasks)

  app.post('/tasks', jsonParser, createTask)

  app.post('/tasks/put', jsonParser, updateTask)

  app.post('/tasks/delete', jsonParser, deleteTask)
}
