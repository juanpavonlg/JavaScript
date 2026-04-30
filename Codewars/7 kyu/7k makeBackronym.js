//@ts-check

const dict = {
  A: "awesome",
  B: "beautiful",
  C: "confident",
  D: "disturbing",
  E: "eager",
  F: "fantastic",
  G: "gregarious",
  H: "hippy",
  I: "ingestable",
  J: "joke",
  K: "klingon",
  L: "literal",
  M: "mustache",
  N: "newtonian",
  O: "oscillating",
  P: "perfect",
  Q: "queen",
  R: "rant",
  S: "stylish",
  T: "turn",
  U: "underlying",
  V: "volcano",
  W: "weird",
  X: "xylophone",
  Y: "yogic",
  Z: "zero",
};

/**
 * @param {string} string 
 * @returns {string} 
 */
var makeBackronym = function (string) {
  return [...string.toUpperCase()].map((e) => dict[e]).join(" ");
}; // makeBackronym()

console.log(makeBackronym("dgm"));
console.log(makeBackronym("lkj"));
