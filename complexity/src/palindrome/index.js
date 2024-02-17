// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*
  Big O(n) => Complexity

  This function (palindrome1) uses the split, reverse, and join methods. The time complexity of these operations is O(n), where n is the length of the input string. Therefore, the overall time complexity of palindrome1 is O(n).
*/

// function palindrome (str) {
//   return str === str.split('').reverse().join('');
// }

/*
  Big O(n) => Complexity

  This function (palindrome2) uses the split method to create an array and then uses the every method to compare characters. Both of these operations iterate through the array once, so the time complexity is O(n), where n is the length of the input string.
*/

// function palindrome (str) {
//   return str.split('').every((char, i) => char === str[str.length - i - 1]);
// }

/*
  Both functions have the same time complexity, but the second function (palindrome2) might be slightly more efficient in terms of memory usage, as it doesn't create a reversed copy of the string. However, the difference in performance may not be significant for small input sizes.

  In terms of readability, the first function (palindrome1) is more concise and might be easier to understand for someone unfamiliar with array iteration methods. Therefore, the choice between the two functions could depend on the specific requirements of your project.
*/

/*
  If you're looking for an alternative approach, you might consider optimizing for both time and space complexity by using a single loop to compare characters from the beginning and end of the string. Here's an example:
*/

/*
  This approach also has a time complexity of O(n) and doesn't create additional arrays, making it efficient in terms of both time and space.
*/

function palindrome (str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}


module.exports = palindrome;
