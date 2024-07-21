const comments = require('./data')
const qs = require('querystring')
const fs = require('fs')

function getHome(req, res) {
  fs.readFile('./files/comment-form.html', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/plain')
      res.end('Server error while loading HTML file')
    } else {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.end(data)
    }
  })
}

function getHTML(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.write('<html><body><div>')
  res.write('<h1>Home</h1>')
  res.write('</html></body></div>')
  return res.end()
}

function getText(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  return res.end('This is plain text')
}

function getComment(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  return res.end(JSON.stringify(comments))
}

function handleNotFound(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  return res.end('This is plain text')
}

function postComment(req, res) {
  res.setHeader('Content-Type', 'text/plain')

  if(req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () =>{
      const comment = qs.parse(body)
      comments.push(comment)
      res.statusCode = 200
      res.end('Comment data was received')
    })
  } else if (req.headers['content-type'] === 'application/json') {
    let commentJSON = ''
    req.on('data', (chunk) => {
      commentJSON += chunk
    })
    req.on('end', () => {
      try {
        comments.push(JSON.parse(commentJSON))
        res.statusCode = 200
        res.end('Comment data was received')
      } catch (error) {
        res.statusCode = 400
        res.end('Invalid JSON')
      }
    })
  } else {
    res.statusCode = 400
    res.end('Data must be in the JSON format or as form')
  }
}

module.exports = {
  getHTML,
  getComment,
  getText,
  handleNotFound,
  getHome,
  postComment
}
