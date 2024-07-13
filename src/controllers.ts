import { ITask, Task } from './seqTask'

export function getTasks(req, res, next) {
  Task.findAll()
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch((err) => console.log(err))
}

export async function getTask(req, res, next) {
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

export async function createTask(req, res, next) {
  const newTask = req.body

  try {
    const result = await Task.create({
      counter: newTask.id,
      title: newTask.title,
      type: newTask.type,
      content: newTask.content,
      description: newTask.description
    })
    console.log('Created Task')
    res.status(201).json({
      message: 'Task created successfully!',
      user: result
    })
  } catch (e) {
    console.log(e)
  }
}

export async function updateTask(req, res, next) {
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

export async function deleteTask(req, res, next) {
  const editedTask = req.body
  const foundTask = await Task.findByPk(editedTask.id)
  if (!foundTask) {
    return res.status(404).json({ message: 'Task not found!' })
  }
  try {
    const result = await Task.destroy({
      where: {
        id: editedTask.id
      }
    })
    res.status(200).json({ message: 'Task deleted!' })
  } catch (e) {
    console.log(e)
  }
}
