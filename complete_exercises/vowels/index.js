//#region description

/*
  --- Directions
  Write a function that returns the number of vowels
  used in a string.  Vowels are the characters 'a', 'e'
  'i', 'o', and 'u'.
  --- Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
 */

//#endregion

//#region solutions

// @desc: solution one

// @desc: String.prototype.includes()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes]

// @desc: Array.prototype.includes()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes]

// function vowels(str) {
//   let count = 0;

//   // const checker = 'aeiou';
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// }

// @desc: solution two

// @desc: String.prototype.match()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match]

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

//#endregion

module.exports = vowels;

