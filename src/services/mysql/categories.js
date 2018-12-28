
const categories = deps => {
  const { connection, erroHandler } = deps

  return {
    all: () => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories', (err, res) => {
          if (err) {
            erroHandler(err, 'Something went wrong while listing categories.', reject)
            return false
          }

          resolve({ categories: res })
        })
      })
    },
    save: (name) => {},
    update: (id, name) => {},
    del: (id) => {},
  }


}

module.exports = categories
