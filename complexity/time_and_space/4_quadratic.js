const arr = [0, 1, 2, 3, 4, 8, 9, 5, 6, 7];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser
      }
    }
  }

  console.log(arr);

  return arr;
}

bubbleSort(arr);

// Time compexity: O(n²) ;
// Space compexity: 0(1);