
const categories = deps => {
  const { connection } = deps

  return {
    all: () => {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM categories', (err, res) => {
          if (err) {
            reject(err)
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
