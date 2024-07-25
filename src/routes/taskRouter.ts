import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers'

const taskRouter = express.Router()
const jsonParser = express.json()

taskRouter.use(jsonParser, (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
taskRouter.get('/tasks', getTasks)

taskRouter.post('/tasks', jsonParser, async (req, res) => {
  const createdTask = await createTask(req.body)
  try {
    res.status(201).json({
      message: 'Task created successfully!',
      task: createdTask
    })
  } catch (e) {
    console.log(e)
  }
})

taskRouter.post('/tasks/put', jsonParser, (req, res, next) => {
  updateTask({ req, res, next })
})

taskRouter.post('/tasks/delete', jsonParser, (req, res, next) => {
  deleteTask({ req, res, next })
})

export default taskRouter
