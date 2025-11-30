function findDigit(num, nth) {
  if (nth < 1) {
    return -1;
  }
  num = Math.abs(num);
  while (--nth) {
    num = (num / 10) | 0;
  }
  return num % 10;
} // findDigit()

console.log(findDigit(5673, 4));
console.log(findDigit(129, 2));
console.log(findDigit(-2825, 3));
console.log(findDigit(-456, 4));
console.log(findDigit(0, 20));
console.log(findDigit(65, 0));
console.log(findDigit(24, -8));
