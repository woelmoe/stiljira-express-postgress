import { Request, Response, NextFunction } from 'express'
import { Optional } from 'sequelize'

export interface IRouteData {
  req: Request
  res: Response
  next: NextFunction
}
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
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}
export interface ITaskInput
  extends Optional<
    ITask,
    'id' | 'title' | 'createdAt' | 'updatedAt' | 'deletedAt'
  > {}
export interface ITaskOutput
  extends Optional<ITask, 'createdAt' | 'updatedAt' | 'deletedAt'> {}
