function Xbonacci(signature, n) {
  const ans = [...signature];
  while (ans.length < n) {
    ans.push(ans.slice(-signature.length).reduce((a, e) => a + e));
  }
  return ans.slice(0, n);
} // Xbonacci()

console.log(Xbonacci([1, 1, 1, 1], 10));
console.log(Xbonacci([0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 1], 10));
