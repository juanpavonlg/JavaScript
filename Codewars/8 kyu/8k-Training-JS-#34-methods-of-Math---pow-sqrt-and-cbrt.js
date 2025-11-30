function cutCube(volume, n) {
  return Number.isInteger(Math.cbrt(volume)) && Math.cbrt(volume / n) % 1 === 0;
} // cutCube()

console.log(cutCube(512, 8));
console.log(cutCube(123, 456));
