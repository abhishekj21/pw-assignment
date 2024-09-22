function destructuringArray(arr) {
  const [first, second, ...rest] = arr;
  const last = rest[rest.length - 1];
  return [first, second, last];
}

const arr = [1, 2, 3, 4, 5];
const result = destructuringArray(arr);
