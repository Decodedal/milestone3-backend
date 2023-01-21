require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.ELP_USERNAME,
    "password": process.env.ELP_PASSWORD,
    "database": process.env.ELP_DATABASE,
    "host": process.env.ELP_HOST,
    "dialect": "postgres",
    "port":"5432"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres",
    "port":"5432"
  }
}
