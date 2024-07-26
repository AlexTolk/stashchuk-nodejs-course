import fs from 'fs'

const fileName = './files/file2.txt'
const copiedFileName = './files/file2-copy.txt'

const readStream = fs.createReadStream(fileName)
const writeStream = fs.createWriteStream(copiedFileName)

readStream.pipe(writeStream)

readStream.on('end', () => console.log('read stream ended'))
writeStream.on('finish', () => console.log('file was coipied'))
writeStream.on('close', () => console.log('write stream closed'))
