import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers'
const taskRouter = express.Router()
const jsonParser = express.json()

taskRouter.use(jsonParser, (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
taskRouter.get('/tasks', getTasks)

taskRouter.post('/tasks', jsonParser, (req, res, next) => {
  createTask({ req, res, next })
})

taskRouter.post('/tasks/put', jsonParser, (req, res, next) => {
  updateTask({ req, res, next })
})

taskRouter.post('/tasks/delete', jsonParser, (req, res, next) => {
  deleteTask({ req, res, next })
})

export default taskRouter
