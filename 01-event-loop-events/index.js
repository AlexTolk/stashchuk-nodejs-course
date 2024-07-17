const { time } = require('console');
const fs = require('fs')
const dns = require('dns')

function timeStamp() {
  return performance.now().toFixed(2)
}


console.log('Program start')

// Timeouts

setTimeout(() => {
  console.log('Timeout1', timeStamp())
}, 0);

setTimeout(() => {
  process.nextTick(() => console.log('Next tick 2', timeStamp()))
  console.log('Timeout2', timeStamp())
}, 100);

// intervals

let intervalCount = 0
 const intervalID = setInterval(() => {
  console.log(`Interval ${intervalCount += 1}`, timeStamp())
  if (intervalCount === 2) {
    clearInterval(intervalID)
  }
}, 50);


// close events

fs.writeFile('./test.txt', 'Hello from Node.js', () => console.log('File written', timeStamp()))

// promises

Promise.resolve().then(() => console.log('Promise 1', timeStamp()))

// next tick

process.nextTick(() => console.log("next tick 1", timeStamp()))

// set immediate

setImmediate(() => console.log('Immediate1', timeStamp()))

// input-output events

dns.lookup('localhost', (err, address, family) => {
  console.log('DNS1 localhost', address, timeStamp())
  Promise.resolve().then(() => console.log("Promise 2", timeStamp()))
  process.nextTick(() => { console.log("Next tick 3", timeStamp())})
} )

console.log('Program end')
