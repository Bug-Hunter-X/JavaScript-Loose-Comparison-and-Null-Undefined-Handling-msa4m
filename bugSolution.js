function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return 0; // Explicitly handle null and undefined
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0