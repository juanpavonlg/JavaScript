function threeInOne(arr) {
  const copy = arr.slice();
  const res = [];
  for (let i = 0; i < arr.length; i += 3) {
    res.push(copy.splice(0, 3).reduce((a, b) => a + b));
  }
  return res;
} // threeInOne()

console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(threeInOne([47, 18, 21, 42, 31, 12, 17, 20, 3, 49, 18, 43, 38, 11, 13, 34, 16, 20, 24, 30, 2]));
