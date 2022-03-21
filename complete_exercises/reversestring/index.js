//#region description

/*
 --- Directions
 Given a string, return a new string with the reversed
 order of characters
 --- Examples
   reverse('apple') === 'leppa'
   reverse('hello') === 'olleh'
   reverse('Greetings!') === '!sgniteerG' 
*/

//#endregion

//#region solutions

// @desc: this is an alternative way of handling this exercise
// @desc: Array.protoype.reverse()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse]

// function reverse(str) {
//   return str.split('').reverse().join('')
// }

// @desc: here is another way of handling this function manually

// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// @desc: there is another possible way of handling this function

function reverse(str) {
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');

  /*
    in an interview the interviewer could ask you how you could shorten the syntax, so here is the solution
    it returns the same result as the previous one just there is syntax is different what this one makes it more
    shortened and cleaner way
  */
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

// @desc: DEBUGGER MODE
// @desc: add a 'debugger' statement in your function
// @desc: call the function manually
// @desc: at the terminal, run 'node inspect index.js'
// @desc: to continue execution of the files, press 'c' or 'cont(continue)' then 'enter'
// @desc: to launch a 'repl' session, type 'repl' then 'enter'
// @desc: to exit the 'repl', press Control + C

// function reverse(str) {
//   debugger;
//   return str.split('').reduce((reversed, character) => character + reversed, '');
// }

// reverse('asdadw');

module.exports = reverse;

//#endregion