function twoDecimalPlaces(number) {
  return ((100 * number) | 0) / 100;
} // twoDecimalPlaces()

console.log(twoDecimalPlaces(32.8493));
console.log(twoDecimalPlaces(14.3286));
