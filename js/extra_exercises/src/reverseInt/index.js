// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let num = Math.abs(n);
  let flag = 1;
  let answer = 0;
  let reminder = 0;

  if (n < 0) {
    flag = -1;
  }

  while (num > 0) {
    reminder = num % 10;
    answer = answer * 10 + reminder;
    num = (num - reminder) / 10;
  }

  if (answer >= Math.pow(2, 31)) {
    return 0;
  }

  return answer * flag;
}

module.exports = reverseInt;
