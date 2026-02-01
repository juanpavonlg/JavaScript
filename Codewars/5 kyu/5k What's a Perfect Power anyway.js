function isPP(n) {
  for (let m = 2; m * m <= n; m++) {
    const k = Math.round(Math.log(n) / Math.log(m));
    if (m ** k === n) {
      return [m, k];
    }
  }
  return null;
} // isPP()

console.log(isPP(4));
console.log(isPP(9));
console.log(isPP(5));
console.log(isPP(29791));
