const myName = 'Alex'
const myHobbies = ['swimming', 'guitar', 'hiking']
const myFavoriteNumber = 77

console.log('Hello from multiple-exports.js')

module.exports.myName = myName
exports.myHobbies = myHobbies
module.exports.myFavoriteNumber = myFavoriteNumber
