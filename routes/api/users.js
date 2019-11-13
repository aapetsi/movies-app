const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// @route    GET   api/users/test
// @desc     Test users route
// @access   Public
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Users route works' });
});

module.exports = router;
