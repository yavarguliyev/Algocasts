// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string) {
  let chars: any = {};
  let maxChar = '';

  for (let char of str) {
    let currrentChar = char;
    chars[currrentChar] = chars[currrentChar] + 1 || 1;
    if (maxChar === '' || chars[currrentChar] > chars[maxChar]) {
      maxChar = currrentChar;
    }
  }

  return maxChar;
}

export default maxChar;
