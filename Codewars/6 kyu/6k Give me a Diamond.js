function diamond(n) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }
  const ans = new Array(n).fill("");
  const mid = (n / 2) | 0;
  for (let i = 0; i <= mid; i++) {
    const row = " ".repeat(mid - i) + "*".repeat(2 * i + 1) + "\n";
    ans[i] = row;
    ans[n - 1 - i] = row;
  }
  return ans.join("");
} // diamond()

console.log(diamond(3));
console.log(diamond(5));
