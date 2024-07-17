let isRunning = true

while (isRunning) {
  console.log('While loop is running...')
}

setTimeout(() => {
  isRunning = false
}, 10);
process.nexTick(() => console.log('Next tick'))
