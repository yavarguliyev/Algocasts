const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// Time compexity: O(2ⁿ);
// Space compexity: 0(n);