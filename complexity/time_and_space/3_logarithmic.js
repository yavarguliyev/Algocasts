const arr = [0, 1, 2, 3, 4, 8, 9, 5, 6, 7];

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  
  const left = mergeSort(arr.slice(0, center));
  const right = mergeSort(arr.slice(center));

  return merge(left, right)
}

const merge = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

console.log(mergeSort(arr));

// Time compexity: 0(n log n);
// Space compexity: 0(n);