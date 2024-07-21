const path = require('path');

const filePath = '/Users/alxt/code/node/index.js'
const textFilePath = '/Users/alxt/code/node/file.txt'
const fileMoviePath = './node/movie.mov'
const directoryPath = './node/subfolder'

console.log(path.isAbsolute(filePath)) //true
console.log(path.isAbsolute(textFilePath)) // true
console.log(path.isAbsolute(fileMoviePath)) //false

console.log(path.basename(filePath)) // index.js
console.log(path.basename(directoryPath)) // subfolder

console.log(path.dirname(filePath)) // /Users/alxt/code/node
console.log(path.dirname(directoryPath)) // ./node

console.log(path.resolve(fileMoviePath)) // /home/alextolk/stashchuk-nodejs-course/node/movie.mov

console.log(path.extname(textFilePath)) // .txt

const parsedPath = console.log(path.parse(filePath))
console.log(path.join(parsedPath.dir, `renamed-${parsedPath.name}.mjs`))
