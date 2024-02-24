// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*
  Big O(n) => Complexity
*/

// function chunk (array, size) {
//   const chunked = [];

//   for (const element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }

//   return chunked;
// }

/*
  Big O(k) => Complexity
*/

/*
  It also iterates through each element of the input array exactly once.
  The slice method has a time complexity of O(k), where k is the size of the subarray being sliced.
  Since the slicing operation is performed for each chunk, the overall time complexity becomes O(n * k), where n is the length of the input array, and k is the specified chunk size.

  If the chunk size (k) is relatively small and constant, the second implementation is still efficient with a linear time complexity of O(n).
  If the chunk size is comparable to the length of the array, the second implementation may be less efficient due to the additional factor of k.

  Therefore, both implementations are generally efficient, and the choice between them may depend on the specific use case and characteristics of your data.
*/

function chunk (array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size;
  }

  return chunked;
}

module.exports = chunk;
