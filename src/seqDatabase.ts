import { Sequelize } from 'sequelize'
import { Express } from 'express'

// export const seqDatabase = new Sequelize(
//   process.env.PG_DB,
//   process.env.PG_USER,
//   process.env.PG_PASSWORD,
//   {
//     host: process.env.PG_HOST,
//     dialect: 'postgres'
//   }
// )
export const seqDatabase = new Sequelize('stiljira', 'admin', 'adm777', {
  host: 'localhost',
  dialect: 'postgres'
})

export async function startConnectionToDb(app: Express) {
  try {
    await seqDatabase.sync()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}
