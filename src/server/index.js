const restify = require('restify')
const server = restify.createServer()
const routes = require('../http/routes')
const cors = require('./cors')

const handlers = [
  cors.actual,
  restify.plugins.queryParser({ mapParams: true }),
  restify.plugins.bodyParser({ mapParams: true })
]

server.pre(cors.preflight)
server.use(handlers)

routes(server)

module.exports = server
