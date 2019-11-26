import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { connect } from 'react-redux'
import { registerUser } from '../actions/authActions'

const Register = props => {
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
    props.registerUser(newUser, props.history)
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
          {props.userRegistration.errors.username && (
            <Form.Text className="text-muted">
              {props.userRegistration.errors.username}
            </Form.Text>
          )}
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
            value={newUser.password}
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

const mapStateToProps = state => ({
  userRegistration: state.userRegister
})

const mapDispatchToProps = {
  registerUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)
