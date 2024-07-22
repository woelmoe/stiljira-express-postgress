import { IRouteData, ITaskInput, ITaskOutput } from './interfaces/interfaces'
import Task from './assets/Task'

export function getTasks(data: IRouteData) {
  const { res } = data
  Task.findAll()
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch((err) => console.log(err))
}

export async function createTask(data: IRouteData) {
  const { res, req } = data
  const newTask = req.body

  const payload: ITaskInput = {
    type: newTask.type,
    content: newTask.content,
    description: newTask.description
  }
  try {
    const result: ITaskOutput = await Task.create(payload)
    const task: ITaskOutput = {
      title: `Task-${result.id}`,
      content: result.content,
      description: result.description,
      id: result.id,
      type: result.type
    }
    res.status(201).json({
      message: 'Task created successfully!',
      task
    })
  } catch (e) {
    console.log(e)
  }
}

export async function updateTask(data: IRouteData) {
  const { res, req } = data
  const editedTask = req.body

  const foundTask = await Task.findByPk(editedTask.id)
  if (!foundTask) {
    return res.status(404).json({ message: `Task ${editedTask.id} not found!` })
  }
  foundTask.title = editedTask.title
  foundTask.type = editedTask.type
  foundTask.content = editedTask.content
  foundTask.description = editedTask.description
  try {
    const task = await foundTask.save()
    res.status(200).json({ message: 'Task updated!', task })
  } catch (e) {
    console.log(e)
  }
}

export async function deleteTask(data: IRouteData) {
  const { res, req } = data
  const editedTask = req.body
  const foundTask = await Task.findByPk(editedTask.id)
  if (!foundTask) {
    return res.status(404).json({ message: `Task ${editedTask.id} not found!` })
  }
  try {
    await Task.destroy({
      where: {
        id: editedTask.id
      }
    })
    res.status(200).json({ message: `Task ${editedTask.id} deleted!` })
  } catch (e) {
    console.log(e)
  }
}
