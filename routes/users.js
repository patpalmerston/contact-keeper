const express = require('express')
const router = express.Router();


// @route   POST api/user
// @desc    Register a user (description)
// @access  Public
router.post('/', (req, res) => {
  res.send('Register a user')
});

module.exports = router