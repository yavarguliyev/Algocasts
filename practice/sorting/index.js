// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

/*
  From i = 0 to array length
    From j = 0 to (array length - i)
      If the element at j is greater than j + 1
        Swap elements at j and j + 1
*/

function bubbleSort(arr) {
  // Implement bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }


  // return sorted array
  return arr;
}

/*
  From i = 0 to array length
    Assume the element at 'i' is the least in the array, assign i to 'indexOfMin'
    For j from i + 1 to end of array
      See if there is an element with lower value
        If there is, record its index
    If the index of the current element and the index of the 'lowest' element is not the same, swap them
*/

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

/*
  Create 'results' array
  While there are still elements in both arrays
    If the first element the left half is less than first in right half
      'shift' the element from left into a 'result' array
    else
      'shift' the element from right into a 'result' array
  Take everything from the array that still has stuff in it and put it in results
*/

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // This syntax does the same thing as Array.prototype.concat()
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
