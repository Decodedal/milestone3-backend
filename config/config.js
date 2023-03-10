require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host":     "127.0.0.1",
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
    "username": process.env.ELP_USERNAME,
    "password": process.env.ELP_PASSWORD,
    "database": process.env.ELP_DATABASE,
    "host": process.env.ELP_HOST,
    "dialect": "postgres",
    "port":"5432"
  }
}
