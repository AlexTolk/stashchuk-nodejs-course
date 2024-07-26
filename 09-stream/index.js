const stream = require('stream')

const upperCaseStream = new stream.Transform({
  transform(chunk, encoding, callback) {
    const upperCased = chunk.toString().toUpperCase()
    callback(null, upperCased)
  }
})

process.stdin
  .pipe(upperCaseStream)
  .pipe(process.stdout)

// const fs = require('fs');

// const readStream = fs.createReadStream('./f.txt', 'utf8')
// const writeStream = fs.createWriteStream('./f_copy.txt')

// readStream.pipe(writeStream)


// writeStream.on('close', () => {
//   console.log('File copying is complete')
// })

// readStream.on('data', (dataChunk) => {
//   console.log(dataChunk)
// })

// readStream.on('end', () => {
//   console.log('Reading complete')
// })

// readStream.on('error', (err) => {
//   console.log(err)
// })

// const writeStream = fs.createWriteStream('./f.txt');

// writeStream.write('This is data ')
// writeStream.write('written to the file using stream')
// writeStream.write('\n')
// writeStream.write('streams are great')

// writeStream.end()
