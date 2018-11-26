const config = require('./config')
const { server } = require('./src/server')

server.listen(config.server.port || 8080)
