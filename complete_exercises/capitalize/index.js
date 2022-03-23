//#region description

/*
  --- Directions
  Write a function that accepts a string. The function should
  capitalize the first letter of each word in the string then
  return the capitalized string.
  --- Examples
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'
 */

//#endregion

//#region solutions

// @desc: solution one

// @desc: String.prototype.split()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split]

// @desc: String.prototype.slice()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice]

// @desc: make an empty array 'words'
// @desc: split the input string by spaces to get an array
// @desc: for each word in the array
//            uppercase the first letter of the word
//            join first letter with rest of the string
//            push result into 'words' array
// @desc: join 'words' into a string and return it

function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// @desc: solution two

// @desc: create 'result' which is the first character of the input string capitalized
// @desc: for each character in the string
//            if the character to the left a space
//              capitalize it and add it to 'result'
//            else
//              add it to 'result'

// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

//#endregion

module.exports = capitalize;
