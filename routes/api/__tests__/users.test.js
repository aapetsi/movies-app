const request = require('supertest')
const server = require('../../../index')
const db = require('../../../data/db-config')

const user = {
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  password: '123456',
  password2: '123456'
}

beforeEach(() => {
  return db('users').truncate()
})

describe('Users route', () => {
  describe('[GET] /api/users/test endpoint', () => {
    test('should return NODE_ENV to be testing', () => {
      expect(process.env.NODE_ENV).toBe('testing')
    })

    test('should return the correct response', async () => {
      const response = await request(server).get('/api/users/test')
      expect(response.status).toBe(200)
      expect(response.body).toEqual({ message: 'Users route works' })
    })
  })

  describe('[GET] /api/users/register endpoint', () => {
    test('should return error with no credentials provided', async () => {
      const response = await request(server)
        .post('/api/users/register')
        .send({})
      expect(response.status).toBe(400)
      expect(response.body).toEqual({
        username: 'Username field is required',
        email: 'Email field is required',
        password: 'Password field is required',
        password2: 'Confirm password field is required'
      })
    })

    test('should return success with correct credentials provided', async () => {
      const response = await request(server)
        .post('/api/users/register')
        .send(user)
      expect(response.status).toBe(201)
      expect(response.body).toEqual({ message: 'User created successfully' })
    })

    test('should return user already exists', async () => {
      const response = await request(server)
        .post('/api/users/register')
        .send(user)
      const response2 = await request(server)
        .post('/api/users/register')
        .send(user)
      expect(response2.status).toBe(400)
      expect(response2.body).toEqual({ message: 'This user already exists.' })
    })
  })
})
