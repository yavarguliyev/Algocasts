// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str: string) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

export default reverse;
