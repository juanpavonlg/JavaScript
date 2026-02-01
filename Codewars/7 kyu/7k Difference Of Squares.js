function differenceOfSquares(n) {
  const sum = ((1 + n) * n) / 2;
  let diff = sum ** 2;
  for (let i = 1; i <= n; i++) {
    diff -= i * i;
  }
  return diff;
} // differenceOfSquares()

console.log(differenceOfSquares(10));
