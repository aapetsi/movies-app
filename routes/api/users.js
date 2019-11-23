const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

// load middlewares
const middlewares = require('../../middleware/index')

// @route    GET   api/users/test
// @desc     Test users route
// @access   Public
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Users route works' });
});

// @route    POST   api/users/register
// @desc     Register new user
// @access   Public
router.post('/register', (req, res) => {
  const newUser = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  res.send(newUser);
});

module.exports = router;
