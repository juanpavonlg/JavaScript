Math.round = function (number) {
  return Math.floor(number + 0.5);
}; // round()

Math.ceil = function (number) {
  const num = number | 0;
  return number === num ? number : num + 1;
}; // ceil()

Math.floor = function (number) {
  return number | 0;
}; // floor()

console.log(Math.round(0.4));
console.log(Math.round(0.5));
console.log(Math.ceil(0.4));
console.log(Math.ceil(0.5));
console.log(Math.floor(0.4));
console.log(Math.floor(0.5));
