function sumOfMinimums(arr) {
  return arr.reduce((a, e) => a + Math.min(...e), 0);
} // sumOfMinimums()

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ]),
);
