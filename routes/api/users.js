const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../../config/keys')

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
router.post('/login', middlewares.validateLoginBody, async (req, res) => {
  const userCred = { email: req.body.email, password: req.body.password }
  User.findBy(userCred)
    .then(user => {
      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user with the given email was found' })
      }
      bcrypt.compare(userCred.password, user.password).then(isMatch => {
        if (isMatch) {
          // create jwt payload
          const payload = {
            id: user.user_id,
            username: user.username,
            email: user.email
          }
          jwt.sign(
            payload,
            keys.secretOrKey,
            { expiresIn: 3600 },
            (err, token) => {
              res.status(200).json({
                success: true,
                token: token
              })
            }
          )
        } else {
          res.status(400).json({ message: 'Invalid email or password' })
        }
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
})

// @route    GET   api/users/current
// @desc     Return current user
// @access   Private
router.get('/current', middlewares.authenticated, (req, res) => {
  res.json({
    message: 'Success',
    username: req.decodedToken.username,
    email: req.decodedToken.email
  })
})

module.exports = router
