const request = require('./utils/mock-server')

describe('Test sample routes', () => {
  it('Should return `Enjoy the Silence!`', async () => {
    const res = await request.get('/')
    expect(res.body).toEqual('Enjoy the Silence!')
  })

  it('Should return `... suns in the sunset.`', async () => {
    const res = await request.get('/two')
    expect(res.body).toEqual('... suns in the sunset.')
  })
})
