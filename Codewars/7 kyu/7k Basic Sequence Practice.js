function sumOfN(n) {
  const seq = [];
  const m = Math.abs(n);
  const sign = Math.sign(n);
  let sum = 0;
  for (let i = 0; i <= m; i++) {
    sum += i;
    seq.push(sign * sum);
  }
  return seq;
} // sumOfN()

console.log(sumOfN(5));
console.log(sumOfN(-5));
console.log(sumOfN(7));
