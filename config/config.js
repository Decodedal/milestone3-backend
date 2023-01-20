require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.REN_USERNAME,
    "password": process.env.REN_PASSWORD,
    "database": process.env.REN_DATABASE,
    "host": process.env.REN_HOST,
    "port":"5432",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
