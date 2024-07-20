import { Sequelize } from 'sequelize'
import 'dotenv/config'

export const seqDatabase = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: process.env.IS_DEV ? 'localhost' : process.env.PG_HOST,
    dialect: 'postgres'
  }
)

let tryCounter = 10
export async function startConnectionToDb() {
  try {
    await seqDatabase.sync()
  } catch (error) {
    tryCounter--
    setTimeout(() => {
      console.log('Give another try...', tryCounter)
      startConnectionToDb()
    }, 1000)
    // console.error(error)
    if (!tryCounter) {
      console.log('Connection tries are over!')
      process.exit(1)
    }
  }
}
