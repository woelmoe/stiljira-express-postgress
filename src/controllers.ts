import { IRouteData, ITaskInput, ITaskOutput } from './interfaces/interfaces'
import Task from './entities/Task'

export function getTasks(data: IRouteData) {
  const { res } = data
  Task.findAll()
    .then((tasks) => {
      res.status(200).json(tasks)
    })
    .catch((err) => console.log(err))
}

export async function createTask(newTask: ITaskInput): Promise<ITaskOutput> {
  const payload = {
    type: newTask.type,
    content: newTask.content,
    description: newTask.description
  }
  try {
    const result = await Task.create(payload)
    const { dataValues } = result
    return {
      title: `Task-${dataValues.id}`,
      content: dataValues.content,
      description: dataValues.description,
      id: dataValues.id,
      type: dataValues.type
    }
  } catch (e) {
    console.log(e)
  }
}

export async function updateTask(updatedTask: ITaskInput) {
  const payload = {
    type: updatedTask.type,
    content: updatedTask.content,
    description: updatedTask.description
  }
  try {
    return await Task.update(payload, {
      where: { id: updatedTask.id }
    })
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
