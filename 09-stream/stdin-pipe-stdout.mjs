import fs from 'fs';
import stream, { Transform } from 'stream';

const upperCaseStream = new stream.Transform({
  transform: function(chunk, encoding, cb) {
    const upperCased = chunk.toString().toUpperCase()
    console.log(upperCased)
    cb(null, upperCased)
  }
})

const reverse = Transform({
  transform: function(chunk, encoding, cb) {
    const reversed = chunk.toString().split("").reverse().join("")
    console.log(reversed)
    cb(null, reversed)
  }
})
process.stdin.pipe(upperCaseStream).pipe(reverse)

// const filePath = './files/stdin-dump.txt'

// const WriteStream = fs.createWriteStream(filePath)

// process.stdin.pipe(WriteStream)
