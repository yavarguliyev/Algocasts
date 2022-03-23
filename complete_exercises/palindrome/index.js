//#region description

/*
  --- Directions
  Given a string, return true if the string is a palindrome
  or false if it is not.  Palindromes are strings that
  form the same word if it is reversed. *Do* include spaces
  and punctuation in determining if the string is a palindrome.
  --- Examples:
  palindrome("abba") === true
  palindrome("abcdefg") === false
 */

//#endregion

//#region solutions

// @desc: solution one
// @desc: Array.protoype.reverse()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse]

// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// @desc: solution two 
// @desc: Array.protoype.every()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every]

function palindrome(str) {
  return str.split('').every((character, index) => {

    /*
      the reason why we use here -1 is to make sure that we take into account the fact the length is the overall length, we are zero-indexed with JavaScript
     */
    return character === str[str.length - index - 1];
  });
}

//#endregion

module.exports = palindrome;
