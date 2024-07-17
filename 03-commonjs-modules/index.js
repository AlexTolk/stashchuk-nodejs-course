const {myName, myHobbies, myFavoriteNumber} = require('./multiple-exports')
const greetingFn = require('./single-export')
const { myName: myOtherName, myFriendsName, myGreatHobbies } = require('./export-and-import')

// multiple-exports
console.log(myFavoriteNumber)

myHobbies.push('climbing')

// single-export
greetingFn(myName)

// export-and-import
console.log(myOtherName, myFriendsName)
console.log(myGreatHobbies)
