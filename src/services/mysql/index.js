const Mysql = require('mysql')
const { databse } = require('../../../config')

const connection = Mysql.createConnection(databse)
const erroHandler = (error, msg, rejectFunction) => {
  console.log(error)
  rejectFunction({ error: msg })
}

const categoryModules = require('./categories')({ connection, erroHandler })

module.exports = {
  categories: () => categoryModules
}
