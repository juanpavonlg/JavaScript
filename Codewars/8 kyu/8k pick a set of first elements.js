function first(arr, n = 1) {
  return arr.slice(0, n);
} // first()

const arr = ["a", "b", "c", "d", "e"];
console.log(first(arr));
console.log(first(arr, 3));
console.log(first(arr, 2));
console.log(first(arr, 0));
