const getUsersHandler = (req, res) => {
  res.send('get users route')
}
const postUsersHandler = (req, res) => {
  res.send('post users route')
}
const getSingleUSerHandler = (req, res) => {
  res.send(`Get user route: userID ${req.params.commentId}`)
}

module.exports = {
  getUsersHandler,
  postUsersHandler,
  getSingleUSerHandler
}
