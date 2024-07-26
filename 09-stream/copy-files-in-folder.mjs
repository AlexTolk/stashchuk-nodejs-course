import fs from 'fs'

const sourceDir = './files'
const destinationDir = './copied-files'

if (!fs.existsSync(sourceDir)) {
  console.log(`Source directory ${sourceDir} doesn't exist!`)
  console.log('Exiting...')
  process.exit(0)
}

if (fs.existsSync(destinationDir)) {
  fs.rmdirSync(destinationDir)
  console.log('destinationn dir removed')
}
fs.mkdirSync(destinationDir)

fs.readdir(sourceDir, (err, fileNames) => {
  if (err) {
    console.log(err)
    process.exit(0)
  }
  console.log(fileNames)
})
