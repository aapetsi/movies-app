const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// load middlewares
const middlewares = require('../../middleware/index')

// load validation

// load users model
const User = require('../../models/Users')

// @route    GET   api/users/test
// @desc     Test users route
// @access   Public
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Users route works' })
})

// @route    POST   api/users/register
// @desc     Register new user
// @access   Public
router.post('/register', middlewares.validateRegisterBody, (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  // check if user already exists in database
  User.findBy(newUser)
    .then(user => {
      if (user) {
        return res.status(400).json({ message: `This user already exists.` })
      }

      newUser.password = bcrypt.hashSync(newUser.password, 10)
      return User.save(newUser).then(user => {
        res.status(201).json({ message: 'User created successfully' })
      })
    })
    .catch(err => {
      res.status(err).json({ message: `Unable to save user. ${err.message}` })
    })
})

// @route    POST   api/users/login
// @desc     Login user
// @access   Public
router.post('/login', middlewares.validateLoginBody, (req, res) => {})

module.exports = router
