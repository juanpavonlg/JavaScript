function squares(x, n) {
  return Array.from({length: n}, (_, i) => Math.pow(x, Math.pow(2, i)));
} // squares()

console.log(squares(2, 5));
console.log(squares(3, 3));
