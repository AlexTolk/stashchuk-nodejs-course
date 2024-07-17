import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()
myEmitter.on('timeout', () => {
  console.log('Timeout event!')
})


setTimeout(() => myEmitter.emit('timeout'), 1000)
setTimeout(() => myEmitter.emit('timeout'), 3000)
