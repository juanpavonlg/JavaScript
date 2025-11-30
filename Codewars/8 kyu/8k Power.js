function numberToPower(number, power) {
  let ans = 1;
  while (power--) {
    ans *= number;
  }
  return ans;
} // numberToPower()

console.log(numberToPower(3, 2));
console.log(numberToPower(2, 3));
console.log(numberToPower(10, 6));
