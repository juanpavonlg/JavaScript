const reverse = function (array) {
  let [l, r] = [0, array.length - 1];
  while (l < r) {
    [array[l], array[r]] = [array[r], array[l]];
    l++;
    r--;
  }
  return array;
}; // reverse()

console.log(reverse([1, 2, 3]));
console.log(reverse([1, null, 14, "two"]));
