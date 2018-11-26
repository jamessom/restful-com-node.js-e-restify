const { server } = require('../../src/server/index')
const supertest = require('supertest')
const request = supertest(server)

module.exports = request
