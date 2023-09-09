// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
 Common String Questions
    What is the most common character in the string?
    Does string A have the same characters as string B(is it an anagram)?
    Does the given string have any repeated characters in it?
*/

function maxChar(str) {
  let chars = {};
  let maxChar = "";

  for (let char of str) {
    let currrentChar = char;
    chars[currrentChar] = chars[currrentChar] + 1 || 1;
    if (maxChar === "" || chars[currrentChar] > chars[maxChar]) {
      maxChar = currrentChar;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
