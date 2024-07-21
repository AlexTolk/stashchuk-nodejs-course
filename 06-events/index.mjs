import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

const timeOutListenerFn = (secQty) => {
  console.log(`Timeout event in ${secQty} in seconds!`)
}

myEmitter.on('timeout', timeOutListenerFn)

setTimeout(() => myEmitter.emit('timeout', 1), 1000)
setTimeout(() => myEmitter.emit('timeout', 2), 2000)


myEmitter.once('singleEvent', () => {
  console.log('Single event occurred')
})


setTimeout(() => myEmitter.emit('singleEvent', 1), 500)
setTimeout(() => myEmitter.emit('singleEvent', 2), 2500)

setTimeout(() => {
  myEmitter.off('timeout', timeOutListenerFn)
}, 3000);
setTimeout(() => myEmitter.emit('timeout', 4), 4000)
