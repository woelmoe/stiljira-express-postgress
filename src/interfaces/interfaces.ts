export enum TaskType {
  todo = 'todo',
  inWork = 'inWork',
  finished = 'finished'
}

export interface ITask {
  id: number
  description: string
  content: string
  type: TaskType
  title?: string
  editable?: boolean
}
