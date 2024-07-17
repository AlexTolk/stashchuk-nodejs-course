const fs = require('fs')


try {

  fs.writeFileSync('./first.txt', 'random text')
  console.log('The text in first.txt has been written')
  fs.appendFileSync('./first.txt', '\nSome more random text')
  console.log('Text has been added in first.txt')
  fs.renameSync('./first.txt', './renamed-first.txt')
  console.log('File was renamed')

} catch (error) {
  console.log(error)
}
