// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*
  This solution has a time complexity of O(n * m), where n is the length of the input string and m is the length of the array of vowels.

  Big O(n * m) => Complexity
*/

// function vowels (str) {
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//   let counter = 0;

//   for (const character of str.toLowerCase()) {
//     if (checker.includes(character)) {
//       counter++;
//     }
//   }

//   return counter;
// }

/*
  This solution has a time complexity of O(n), where n is the length of the input string.

  Big O(n) => Complexity
*/

// function vowels (str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

/*
  In terms of complexity, the regular expression approach is more efficient than the array includes approach, especially for larger strings. The regular expression approach has a linear time complexity, while the array includes approach has a potentially higher time complexity due to the nested loop and the use of the includes method.

  As for improvements, both solutions are reasonable for small to medium-sized strings. If performance is critical for very large strings, you might consider further optimizations or parallelization. However, for most practical purposes, the regular expression approach is concise and performs well.
*/

/*
  The complexity of the alternative solution using Set and filter is still O(n), where n is the length of the input string. Here's the breakdown:
  
  toLowerCase(): O(n) - This operation iterates through each character in the string, converting it to lowercase.

  split(''): O(n) - This operation creates an array of characters from the string.

  filter(char => vowelSet.has(char)): O(n) - The filter function iterates through each character in the array and checks if it is in the vowel Set. This operation has a linear time complexity.

  The use of a Set for vowel checking is more efficient than an array with includes due to the constant time complexity for lookups in a Set. The overall time complexity is still linear, and this solution offers a balance between readability and efficiency for counting vowels in a string.

  Big O(n * m) => Complexity
*/

function vowels(str) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  const vowelArray = str.toLowerCase().split('').filter(char => vowelSet.has(char));

  return vowelArray.length;
}


module.exports = vowels;
