// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n: number) {
  for (let index = 1; index <= n; index++) {
    // Is the number a multiple of 3 or 5?
    if (index % 3 === 0 && index % 5 === 0) {
      console.log('fizzbuzz');
    } else if (index % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (index % 5 === 0) {
      // Is the number a multiple of 5?
      console.log('buzz');
    } else {
      console.log(index);
    }
  }
}

export default fizzBuzz;
