import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../controllers'

const taskRouter = express.Router()
const jsonParser = express.json()

taskRouter.use(jsonParser, (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
taskRouter.get('/tasks', async (req, res) => {
  const allTasks = await getTasks()
  try {
    res.status(200).json(allTasks)
  } catch (e) {
    console.log(e)
  }
})

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

taskRouter.post('/tasks/put', jsonParser, async (req, res) => {
  const editedTask = req.body

  try {
    const task = await updateTask(editedTask)
    res.status(200).json({ message: 'Task updated!', task })
  } catch (e) {
    console.log(e)
  }
})

taskRouter.post('/tasks/delete', jsonParser, (req, res, next) => {
  deleteTask({ req, res, next })
})

export default taskRouter
