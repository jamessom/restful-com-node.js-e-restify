const Mysql = require('mysql')
const config = require('../../config')

// #TODO: handle erro if connection is out
const connection = (config.databse !== undefined ) ? Mysql.createConnection(config.databse) : undefined

const categories = new Promise((resolve, reject) => {
  connection.query('SELECT * FROM categories', (err, res) => {
    if (err) {
      reject(err)
    }
    resolve({ categories: res })
  })
})

module.exports = categories
