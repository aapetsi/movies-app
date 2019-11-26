const request = require('supertest')
const server = require('../../../index')
const db = require('../../../data/db-config')

const user = {
  username: 'johndoe',
  email: 'johndoe@gmail.com',
  password: '123456',
  password2: '123456'
}

let token

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

  describe('[POST] /api/users/register endpoint', () => {
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

  describe('[POST] /api/users/login endpoint', () => {
    test('should return error with no email/password', async () => {
      const response = await request(server)
        .post('/api/users/login')
        .send({})
      expect(response.status).toBe(400)
      expect(response.body).toEqual({
        email: 'Email field is required',
        password: 'Password field is required'
      })
    })

    test('should return error not found with unknwon email', async () => {
      const response = await request(server)
        .post('/api/users/login')
        .send({
          email: 'badrequest@express.com',
          password: 'Addkk;la909a0uksf'
        })
      expect(response.status).toBe(404)
      expect(response.body).toEqual({
        message: 'No user with the given email was found'
      })
    })

    test('should return jwt token on successful login', async () => {
      const savedUser = await request(server)
        .post('/api/users/register')
        .send(user)
      const response = await request(server)
        .post('/api/users/login')
        .send({ email: 'johndoe@gmail.com', password: '123456' })
      expect(response.status).toBe(200)
      expect(response.body).toMatchObject({})
    })
  })

  describe('[GET] /api/users/current', () => {
    test('should return unauthorised access', async () => {
      const response = await request(server).get('/api/users/current')
      expect(response.status).toBe(401)
      expect(response.body).toEqual({ message: 'Unauthorised' })
    })

    test('should return error malformed jsonwebtoken', async () => {
      const response = await request(server)
        .get('/api/users/current')
        .set({ Authorization: 'token' })
      expect(response.status).toBe(401)
      expect(response.body).toEqual({
        name: 'JsonWebTokenError',
        message: 'jwt malformed'
      })
    })

    test('should return the current user', async () => {
      const registered = await request(server)
        .post('/api/users/register')
        .send(user)
      const loggedIn = await request(server)
        .post('/api/users/login')
        .send({ email: 'johndoe@gmail.com', password: '123456' })
      const response = await request(server)
        .get('/api/users/current')
        .set({ Authorization: loggedIn.body.token })
      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        message: 'Success',
        username: user.username,
        email: user.email
      })
    })
  })
})
