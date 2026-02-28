function flatten(array) {
  return [].concat(...array);
} // flatten()

console.log(flatten([1, 2, 3]));
console.log(
  flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [1, 2, 3],
  ]),
);
console.log(flatten([[[1, 2, 3]]]));
