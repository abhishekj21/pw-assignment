function swapValues(x, y) {
  // Swap x and y using destructuring
  [x, y] = [y, x];
  return [x, y]; // Return the swapped values as an array
}

// Example usage:
let x = 5;
let y = 10;

const swapped = swapValues(x, y);
console.log(swapped); // Output: [10, 5]
