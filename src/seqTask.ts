import { INTEGER, Model, ModelCtor, STRING } from 'sequelize'
import { seqDatabase } from './seqDatabase'
import { TaskType } from './interfaces/interfaces'

export interface ITask {
  id: number
  counter: number
  description: string
  content: string
  type: TaskType
  title?: string
}

export const Task = seqDatabase.define('task', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  counter: INTEGER,
  title: STRING,
  type: STRING,
  content: STRING,
  description: STRING
})
