import { EventEmitter } from 'events'
import fs from 'fs'

const fileEmitter = new EventEmitter()

fileEmitter.on('writeComplete', () => {
  console.log('The text in first.txt has been written')
  fs.appendFile('./first.txt', '\nSome more random text', () => {
    fileEmitter.emit('appendComplete')
  })
})

fileEmitter.on('appendComplete', () => {
  console.log('Text has been added in first.txt')
  fs.rename('./first.txt', './renamed-first.txt', () => {
    console.log('File was renamed')
  })
})

fs.writeFile('./first.txt', 'random text', () => {
  fileEmitter.emit('writeComplete')
})
