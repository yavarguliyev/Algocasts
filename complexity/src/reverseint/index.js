// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
  Big O(n) => Complexity
*/

// function reverseInt (n) {
//   return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
// }

/*
  Big O(n) => Complexity

  This approach has a time complexity of O(log(n)), where log(n) is the number of digits in the integer.

  Math.sign() Usage:
  Be cautious when using Math.sign() as it returns 0 for a value of 0, which may lead to unexpected results. You might want to handle the case of 0 separately if needed.
*/

function reverseInt (n) {
  let reversed = 0;
  let originalSign = Math.sign(n);

  n = Math.abs(n);

  while (n !== 0) {
    reversed = reversed * 10 + n % 10;
    n = Math.trunc(n / 10);
  }

  return reversed * originalSign;
}

/*
  Between the two methods, the second one is generally better in terms of performance and efficiency. Here are some reasons why:

  Performance:

  The second method avoids the conversion between string and integer, which can be relatively expensive in terms of time and memory.
  The second method uses simple mathematical operations to reverse the integer directly, making it more efficient for this specific task.
  
  Readability:

  The second method is more readable and easier to understand. It uses a simple loop to reverse the digits, and the logic is clear.
  The first method involves converting the number to a string, splitting, reversing, joining, and then converting back to a number. This series of operations might be less intuitive.

  Handling of Negative Numbers:

  The second method explicitly handles negative numbers by storing the original sign, performing the calculation on the absolute value, and then applying the sign back. The first method uses Math.sign(n), which can return 0 for the case of 0 and might be less clear.
  
  While both methods produce the correct results, the second method is generally preferred for its simplicity, better performance, and explicit handling of negative numbers.
*/

module.exports = reverseInt;
