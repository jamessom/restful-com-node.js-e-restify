
const routes = (server) => {
  server.get('/', (req, res, next) => {
    res.send('Enjoy the Silence!')
    next()
  })

  server.get('/two', (req, res, next) => {
    res.send('... suns in the sunset.')
    next()
  })
}

module.exports = routes
