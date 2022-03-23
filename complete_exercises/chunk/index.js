//#region description

/*
  --- Directions
  Given an array and chunk size, divide the array into many subarrays
  where each subarray is of length size
  --- Examples
  chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
  chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
  chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
  chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
  chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
 */

//#endregion

//#region solutions

// @desc: solution one
// @desc: create empty array to hold chunks called 'chunked'
// @desc: for each element in the 'unchunked' array
// @desc: retrieve the last element in 'chunked'
// @desc: if last element does not exist, or if its length is equal to chunk size
// @desc: push a new chunk into 'chunked' with the current element
// @desc: else add the current element into the chunk

// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunked;
// }

// @desc: solution two
// @desc: Array.protoype.slice()
// @desc: URL[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice]

// @desc: create empty 'chunked' array
// @desc: create 'index' start at 0
// @desc: while index is less than array.length
// @desc: push a slice of length 'size' from 'array' into 'chunked'
// @desc: add 'size' to 'index'

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

//#endregion

module.exports = chunk;
