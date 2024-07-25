import { ITaskInput, ITaskOutput } from './interfaces/interfaces'
import Task from './entities/Task'

export async function getTasks() {
  try {
    return await Task.findAll()
  } catch (e) {
    console.log(e)
  }
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

export async function deleteTask(task: ITaskInput): Promise<boolean> {
  try {
    await Task.destroy({
      where: {
        id: task.id
      }
    })
    return true
  } catch (e) {
    console.log(e)
  }
  return false
}
