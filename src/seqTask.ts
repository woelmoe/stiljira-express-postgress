import { INTEGER, STRING } from 'sequelize'

export interface ITask {
  id: number
  description: string
  content: string
  type: TaskType
  title?: string
  editable?: boolean
}

import { seqDatabase } from './seqDatabase'
import { TaskType } from './interfaces/interfaces'
const Task = seqDatabase.define('task', {
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
