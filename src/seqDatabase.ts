import { Sequelize } from 'sequelize'
import 'dotenv/config'

const isDev = process.env.IS_DEV === 'true'
export const seqDatabase = new Sequelize(
  process.env.PG_DB,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: isDev ? 'localhost' : process.env.PG_HOST,
    dialect: 'postgres'
  }
)
