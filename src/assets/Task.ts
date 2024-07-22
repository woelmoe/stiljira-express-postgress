import { DataTypes, Model } from 'sequelize'
import { ITask, ITaskInput, TaskType } from '../interfaces/interfaces'
import { seqDatabase } from '../seqDatabase'

class Task extends Model<ITask, ITaskInput> implements ITask {
  public id: number
  public content: string
  public description: string
  public type: TaskType

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
  public readonly deletedAt!: Date
}

Task.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    timestamps: true,
    sequelize: seqDatabase,
    paranoid: true
  }
)

export default Task
