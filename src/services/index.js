const Mysql = require('mysql')
const config = require('../../config')

const connection = Mysql.createConnection(config.databse)

const categories = new Promise((resolve, reject) => {
  connection.query('SELECT * FROM categories', (err, res) => {
    if (err) {
      reject(err)
    }
    resolve({ categories: res })
  })
})

module.exports = categories
