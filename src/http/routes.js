const categories = require('../services')

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
      const cat = await categories
      res.send(cat)
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.post('/categories', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  server.put('/categories', (req, res, next) => {
    res.send('put categories')
    next()
  })

  server.del('/categories', (req, res, next) => {
    res.send('delete categories')
    next()
  })
}

module.exports = routes
