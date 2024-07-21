import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

myEmitter.on('specialEvent', () => {
  console.log('First event listener')
})


myEmitter.on('specialEvent', () => {
  console.log('Second event listener')
})

myEmitter.setMaxListeners(25)
console.log(myEmitter.getMaxListeners())


setTimeout(() => {
  myEmitter.emit('specialEvent')
}, 1000);

myEmitter.on('otherEvent', () => {
  console.log('Another event')
})

console.log(myEmitter.eventNames())
