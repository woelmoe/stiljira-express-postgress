import { Request, Response, NextFunction } from 'express'

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
  editable?: boolean
}
