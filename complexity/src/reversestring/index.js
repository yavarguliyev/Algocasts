// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
  Big O(n) => Complexity

  In terms of big O notation and overall performance, the first method using a for...of loop is the most efficient among the three. It directly builds the reversed string by iterating through each character only once, resulting in a time complexity of O(n), where n is the length of the input string.
*/

function reverse (str) {
  let reversed = '';

  for (const char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

/*
  Big O(n) => Complexity

  This method uses the split(''), reverse(), and join('') methods to reverse the string. While this method is concise, it may not be the most efficient. The split('') and join('') methods involve creating arrays and joining them back together, which adds some overhead. The time complexity is also O(n), but it might have a slightly higher constant factor due to the array operations.
*/

// function reverse (str) {
//   return str.split('').reverse().join('');
// }

/*
  Big O(n) => Complexity

  This method uses the reduce function to build the reversed string. This method is similar to the first one in terms of time complexity (O(n)), but it might be slightly less readable for some developers.
*/

// function reverse (str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '');
// }

module.exports = reverse;
