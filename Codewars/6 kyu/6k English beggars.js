//@ts-check

/**
 * @param {number[]} values 
 * @param {number} n 
 * @returns {number[]}
 */
function beggars(values, n) {
  const ans = Array(n).fill(0);
  for (let beggar = 0; beggar < n; beggar++) {
    for (let i = beggar; i < values.length; i += n) {
      ans[beggar] += values[i];
    }
  }
  return ans;
} // beggars()

console.log(beggars([1, 2, 3, 4, 5], 2));
console.log(beggars([1, 2, 3, 4, 5], 3));
