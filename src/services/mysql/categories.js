
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
    save: (name) => {
      return new Promise((resolve, reject) => {
        connection.query('INSERT INTO categories (name) VALUES (?)', [name], (err, res) => {
          if (err) {
            erroHandler(err, 'Something went wrong while creating new categry.', reject)
            return false
          }

          resolve({ category: {
            name,
            id: res.insertId
          }})
        })
      })
    },
    update: (id, name) => {
      return new Promise((resolve, reject) => {
        connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (err, res) => {
          if (err) {
            erroHandler(err, 'Something went wrong while updating this category.', reject)
            return false
          }

          resolve({
            category: {
              name,
              id: res.insertId,
              res
            }
          })
        })
      })
    },
    del: (id) => {
      return new Promise((resolve, reject) => {
        connection.query('DELETE FROM categories WHERE id = ?', [id], (err, res) => {
          if (err) {
            erroHandler(err, 'Something went wrong while deleting this category.', reject)
            return false
          }

          resolve({ category: { res } })
        })
      })
    },
  }


}

module.exports = categories
