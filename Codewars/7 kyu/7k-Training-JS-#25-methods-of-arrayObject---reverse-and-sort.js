function sortIt(arr) {
  const copy = arr.slice();
  return copy.sort((a, b) => {
    if (count(copy, a) > count(copy, b)) return 1;
    return b - a;
  });
} // sortIt()

function count(arr, e) {
  return arr.filter((x) => x === e).length;
} // count()

console.log(sortIt([1, 1, 1, 2, 2, 3]));
console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
console.log(sortIt([1, 3, 3, 5, 2, 2, 4, 6, 6, 7, 7, 7]));
