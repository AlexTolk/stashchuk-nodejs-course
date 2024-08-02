const express = require('express')
const { getCommentsHandler, postCommentsHandler, getSingleCommentHandler, deleteCommentHandler } = require('../controllers/comments')
const router = express.Router()

router.route('/')
  .get(getCommentsHandler)
  .post(postCommentsHandler)

router.route('/:commentId')
  .get( getSingleCommentHandler)
  .delete( deleteCommentHandler)

module.exports = router
