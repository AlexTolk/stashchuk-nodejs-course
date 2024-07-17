const fs = require('fs')

fs.writeFile('./first.txt', 'Some random text', (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('The text in first.txt has been written')
    fs.appendFile('./first.txt', '\nSome more random text', (err) =>
    {
      if (err) console.log(err)
      else {
        console.log('Text has been added in first.txt')
        fs.rename('./first.txt', './renamed-first.txt', (err) => {
          if (err) console.log(err)
          else {
           console.log('File was renamed')
          }
        })
      }
    })
  }
})
