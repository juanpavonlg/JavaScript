function integrate(coefficient, exponent) {
  return `${coefficient / ++exponent}x^${exponent}`;
} // integrate()

console.log(integrate(3, 2));
console.log(integrate(12, 5));
console.log(integrate(20, 1));
console.log(integrate(40, 3));
console.log(integrate(90, 2));
