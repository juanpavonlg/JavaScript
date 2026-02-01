function findAverage(nums) {
  return nums.reduce((a, e) => a + e) / nums.length;
} // findAverage()

console.log(findAverage([1, 3, 5, 7]));
