const Mysql = require('mysql')
const { databse } = require('../../../config')

// #TODO: handle erro if connection is out
const connection = Mysql.createConnection(databse)

const categoryModules = require('./categories')({ connection })

module.exports = {
  categories: () => categoryModules
}
