const Sequelize = require('sequelize')
const pkg = require('../../package.json')
require('dotenv').config()

const db = new Sequelize({
  database: process.env.DATABASE_USER,
  username: process.env.DATABASE_NAME,
  password: process.env.PASSWORD,
  host: process.env.DATABASE_URL,
  port: 5432,
  logging: console.log,
  maxConcurrentQueries: 100,
  dialect: 'postgres',
  pool: { maxConnections: 5, maxIdleTime: 30 },
  language: 'en'
})

module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
