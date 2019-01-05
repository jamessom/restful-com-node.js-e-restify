const db = require('../services/mysql')

const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the Silence!')
    next()
  })

  server.get('/two', (req, res, next) => {
    res.send('... suns in the sunset.')
    next()
  })

  server.get('/categories', async (req, res, next) => {
    try {
      res.send(await db.categories().all())
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.post('/categories', async (req, res, next) => {
    try {
      const { name } = req.params
      res.send(await db.categories().save(name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.put('/categories', async (req, res, next) => {
    try {
      const { id, name } = req.params
      res.send(await db.categories().update(id, name))
    } catch (error) {
      res.send(error)
    }
    next()
  })

  server.del('/categories', async (req, res, next) => {
    try {
      const { id } = req.params
      res.send(await db.categories().del(id))
    } catch (error) {
      res.send(error)
    }
    next()
  })
}

module.exports = routes
