import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const handleChange = e => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/api/users/register', newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data))
  }
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={newUser.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={newUser.password2}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={newUser.password2}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  )
}

export default Register
