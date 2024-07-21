import EventEmitter from 'events'

class Post extends EventEmitter {
  constructor(author, text) {
    super()
    this.author = author
    this.text = text
    this.likesQty = 0
    this.on('likedPost', (username) => {
      console.log(` ${username} liked your post`)
    })
    this.on('error', (error) => {
      console.log(error)
    })
  }

  like(username) {
    if (!username) {
      return this.emit('error', new Error('No username in the like request'))
    }
    this.likesQty ++
    this.emit('likedPost', username)
  }
}

const myPost = new Post('Alex', 'My great post!')
console.log(myPost.author)
console.log(myPost.text)
console.log(`you post has ${myPost.likesQty} likes`)
myPost.like('Bob')
console.log(`your post has ${myPost.likesQty} likes`)
setTimeout(() => {
  myPost.like('Alice')
  console.log(`your post has ${myPost.likesQty} likes`)
}, 3000);
myPost.like()
