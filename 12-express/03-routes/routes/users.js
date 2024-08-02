const express = require('express')
const { getUsersHandler, postUsersHandler, getSingleUSerHandler } = require('../controllers/users')
const router = express.Router()

router.route('/')
  .get( getUsersHandler)
  .post(postUsersHandler)

router.get('/:userId', getSingleUSerHandler)

module.exports = router
