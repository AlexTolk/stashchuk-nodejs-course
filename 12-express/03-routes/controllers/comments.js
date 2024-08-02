const getCommentsHandler = (req, res) => {
  res.send('get comments route')
}
const getSingleCommentHandler = (req, res) => {
  res.send(`Get comment route: commentID ${req.params.commentId}`)
}
const postCommentsHandler = (req, res) => {
  res.send('post comments route')
}
const deleteCommentHandler = (req, res) => {
  res.send(`Delete comment route: commentID ${req.params.commentId}`)
}

module.exports = {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteCommentHandler
}
