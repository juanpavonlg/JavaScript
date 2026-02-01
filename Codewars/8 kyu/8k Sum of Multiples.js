function sumMul(n,m){
  let sum = 0;
  let mul = n;
  while (mul < m) {
    sum += mul;
    mul += n;
  }
  return m > 0 ? sum : "INVALID";
} // sumMul()

console.log(sumMul(2, 9));
console.log(sumMul(3, 13));
console.log(sumMul(4, 123));
console.log(sumMul(4, -7));
