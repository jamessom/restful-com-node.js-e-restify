const request = require('./utils/mock-server')

describe('Test sample routes', () => {
  it('Should return `Enjoy the Silence!`', async (done) => {
    const res = await request.get('/')
    expect(res.body).toEqual('Enjoy the Silence!')
    done()
  })

  it('Should return `... suns in the sunset.`', async (done) => {
    const res = await request.get('/two')
    expect(res.body).toEqual('... suns in the sunset.')
    done()
  })

  it('Should return `put categories`', async (done) => {
    const res = await request.put('/categories')
    expect(res.body).toEqual('put categories')
    done()
  })

  it('Should return `delete categories`', async (done) => {
    const res = await request.delete('/categories')
    expect(res.body).toEqual('delete categories')
    done()
  })
})

