import { ITask, Task } from './seqTask'
import { IRouteData } from './interfaces/interfaces'

export function getTasks(data: IRouteData) {
  const { res } = data
  Task.findAll()
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch((err) => console.log(err))
}

export async function getTask(data: IRouteData) {
  const { res, req } = data
  const taskId = req.body.id
  try {
    const task = await Task.findByPk(taskId)
    if (!task) {
      return res.status(404).json({ message: 'Task not found!' })
    }
    res.status(200).json({ task: task })
  } catch (e) {
    console.log(e)
  }
}

export async function createTask(data: IRouteData) {
  const { res, req } = data
  const newTask = req.body

  try {
    const result: any = await Task.create({
      type: newTask.type,
      content: newTask.content,
      description: newTask.description
    })
    console.log('Created Task')
    res.status(201).json({
      message: 'Task created successfully!',
      task: {
        title: `Task-${result.id}`,
        content: result.content,
        description: result.description,
        id: result.id,
        type: result.type
      } as ITask
    })
  } catch (e) {
    console.log(e)
  }
}

export async function updateTask(data: IRouteData) {
  const { res, req } = data
  const editedTask = req.body

  const foundTask: any = await Task.findByPk(editedTask.id)
  if (!foundTask) {
    return res.status(404).json({ message: 'Task not found!' })
  }
  foundTask.title = editedTask.title
  foundTask.type = editedTask.type
  foundTask.content = editedTask.content
  foundTask.description = editedTask.description
  try {
    const result = await foundTask.save()
    res.status(200).json({ message: 'Task updated!', task: result })
  } catch (e) {
    console.log(e)
  }
}

export async function deleteTask(data: IRouteData) {
  const { res, req } = data
  const editedTask = req.body
  const foundTask = await Task.findByPk(editedTask.id)
  if (!foundTask) {
    return res.status(404).json({ message: 'Task not found!' })
  }
  try {
    await Task.destroy({
      where: {
        id: editedTask.id
      }
    })
    res.status(200).json({ message: 'Task deleted!' })
  } catch (e) {
    console.log(e)
  }
}
