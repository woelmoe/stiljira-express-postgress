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
