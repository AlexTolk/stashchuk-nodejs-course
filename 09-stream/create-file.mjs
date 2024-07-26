import fs from 'fs'
import path from 'path'

if (!process.argv[2] || !process.argv[3]) {
  console.log('file name and lines quantity are required')
  process.exit(0)
}

const fileName = process.argv[2]
const linesQty = parseInt(process.argv[3])

if (isNaN(linesQty)) {
  console.log('Lines qty must be a number')
  process.exit(0)
}

const WriteStream = fs.createWriteStream(path.join('./files', fileName))

for (let i = 0; i < linesQty; i++) {
  WriteStream.write(`This is a line num ${i} in the auto-generated file \n`)
}

WriteStream.end(() => {
  console.log(`Automatically generated file ${fileName} was created with ${linesQty} lines inside`)
})
