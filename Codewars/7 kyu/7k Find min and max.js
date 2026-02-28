function getMinMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
} // getMinMax()

console.log(getMinMax([1]));
console.log(getMinMax([1, 2]));
console.log(getMinMax([2, 1]));
