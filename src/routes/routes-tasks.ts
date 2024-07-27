import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from '../services/services-tasks'

const routesTasks = express.Router()
const jsonParser = express.json()

routesTasks.use(jsonParser, (req, res, next) => {
  next()
})

routesTasks.get('/tasks', async (req, res) => {
  const allTasks = await getTasks()
  try {
    res.status(200).json(allTasks)
  } catch (e) {
    console.log(e)
  }
})

routesTasks.post('/tasks', async (req, res) => {
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

routesTasks.post('/tasks/put', async (req, res) => {
  const editedTask = req.body
  try {
    const task = await updateTask(editedTask)
    res.status(200).json({ message: 'Task updated!', task })
  } catch (e) {
    console.log(e)
  }
})

routesTasks.post('/tasks/delete', async (req, res) => {
  const task = req.body
  try {
    const deleted = await deleteTask(task)
    if (!deleted) {
      return res.status(404).json({ message: `Task ${task.id} not found!` })
    }
    res.status(200).json({ message: `Task ${task.id} deleted!` })
  } catch (e) {
    console.log(e)
  }
})

export default routesTasks
