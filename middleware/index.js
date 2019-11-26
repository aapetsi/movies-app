const Validator = require('validator')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

module.exports = {
  validateRegisterBody,
  validateLoginBody,
  authenticated
}

function authenticated(req, res, next) {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, keys.secretOrKey, (err, decodedToken) => {
      if (err) {
        res.status(401).json(err)
      } else {
        req.decodedToken = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'Unauthorised' })
  }
}

function validateRegisterBody(req, res, next) {
  const errors = {}
  const { username = '', email = '', password = '', password2 = '' } = req.body
  if (!Validator.isLength(username, { min: 2, max: 30 })) {
    errors.username = 'Username must be between 2 and 30 characters'
  }

  if (Validator.isEmpty(username)) {
    errors.username = 'Username field is required'
  }

  if (!Validator.isEmail(email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required'
  }

  if (!Validator.isLength(password, { min: 6, max: 30 })) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  if (!Validator.equals(password, password2)) {
    errors.password2 = 'Both passwords must match'
  }

  if (Validator.isEmpty(password2)) {
    errors.password2 = 'Confirm password field is required'
  }

  if (!isEmpty(errors)) {
    res.status(400).json(errors)
  } else {
    next()
  }
}

function validateLoginBody(req, res, next) {
  const errors = {}
  const { email = '', password = '' } = req.body

  if (Validator.isEmpty(email)) {
    errors.email = 'Email field is required'
  }

  if (Validator.isEmpty(password)) {
    errors.password = 'Password field is required'
  }

  if (!isEmpty(errors)) {
    res.status(400).json(errors)
  } else {
    next()
  }
}

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  )
}
