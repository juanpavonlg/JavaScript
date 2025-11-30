function howManySmaller(arr, n) {
  return arr.filter(e => +e.toFixed(2) < n).length;
} // howManySmaller()

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
