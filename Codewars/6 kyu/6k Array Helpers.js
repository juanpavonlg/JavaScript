Array.prototype.square = function () {
  return this.map((e) => e * e);
}; // square()

Array.prototype.cube = function () {
  return this.map((e) => e ** 3);
}; // cube()

Array.prototype.average = function () {
  return this.sum() / this.length;
}; // average()

Array.prototype.sum = function () {
  return this.reduce((a, e) => a + e, 0);
}; // sum()

Array.prototype.even = function () {
  return this.filter((e) => e % 2 === 0);
}; // even()

Array.prototype.odd = function () {
  return this.filter((e) => e % 2);
}; // odd()

const numbers = [];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());
