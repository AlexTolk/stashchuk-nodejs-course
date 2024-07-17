const fs = require('fs/promises')

fs.writeFile('./first.txt', 'random text')
  .then(() => console.log('The text in first.txt has been written'))
  .then(() => fs.appendFile('./first.txt', '\nSome more random text'))
  .then(() => console.log('Text has been added in first.txt'))
  .then(() => fs.rename('./first.txt', './renamed-first.txt'))
  .then(() => console.log('File was renamed'))
  .catch((err) => console.log(err))
