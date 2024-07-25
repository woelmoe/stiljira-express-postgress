import express from 'express'
import { createTask, deleteTask, getTasks, updateTask } from './controllers'
const router = express.Router()
const jsonParser = express.json()

router.use(jsonParser, (req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
router.get('/tasks', getTasks)

router.post('/tasks', jsonParser, (req, res, next) => {
  createTask({ req, res, next })
})

router.post('/tasks/put', jsonParser, (req, res, next) => {
  updateTask({ req, res, next })
})

router.post('/tasks/delete', jsonParser, (req, res, next) => {
  deleteTask({ req, res, next })
})

export default router
