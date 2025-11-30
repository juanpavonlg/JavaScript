function maxMin(arr1, arr2) {
  const res = arr1.map((n, i) => Math.abs(n - arr2[i]));
  return [Math.max(...res), Math.min(...res)];
} // maxMin()

console.log(maxMin([1, 3, 5], [9, 8, 7]));
