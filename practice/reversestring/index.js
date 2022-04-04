// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;

/*
  turn 'str' into an array
  call 'reverse' method on the array
  join the array back into a string
  return result
*/
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

/*
  create an empty string called 'reversed'
  for each character in the provided string
    take the character and add it to the start of 'reversed'

  return the variable 'reversed'
*/
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

/*
  add a 'debugger' statement in your function
  call the function manually
  at the terminal, run 'node inspect index.js'
  to continue execution of the file, press 'c' then 'enter'
  to launch a 'repl' session, type 'repl' then 'enter'
  to exit the 'repl', press Control + C
*/
// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, character) => character + reversed, '');
// }