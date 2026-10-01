//@ts-check

/**
 * @param {number} x 
 * @param {number} y 
 * @returns {[number, number]}
 */
function aspectRatio(x, y) {
  return [Math.ceil(16 / 9 * y), y];
} // aspectRatio()

console.log(aspectRatio(640, 480));
console.log(aspectRatio(960, 720));
console.log(aspectRatio(1440, 1080));
console.log(aspectRatio(1920, 1440));
