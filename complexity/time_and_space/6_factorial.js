const arr = [0, 1, 2, 3, 4, 8, 9, 5, 6, 7];

const generatePermutations = (arr) => {
  if (arr.length === 0) {
    return [[]];
  }

  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = generatePermutations(rest);

    for (const perm of perms) {
      rest.push([arr[i], ...perm]);
    }
  }

  return results;
}

console.log(generatePermutations(arr));

// Time compexity: O(n!);
// Space compexity: O(n!);