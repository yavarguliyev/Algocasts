//#region description

/*
  --- Directions
  Given an integer, return an integer that is the reverse
  ordering of numbers.
  --- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
*/

//#endregion

//#region solutions

// @desc: solution one

// function reverseInt(n) {
//   const reversed = n.toString().split('').reverse().join('');
//   if (n < 0) return parseInt(reversed) * -1;

//   return parseInt(reversed);
// }


// @desc: solution two
// @desc: Math.sign()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign]

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

//#endregion

module.exports = reverseInt;
