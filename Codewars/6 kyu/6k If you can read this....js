//@ts-check

/** @type {{[key: string]: string}} */
const NATO = {
  A: "Alfa",
  N: "November",
  B: "Bravo",
  O: "Oscar",
  C: "Charlie",
  P: "Papa",
  D: "Delta",
  Q: "Quebec",
  E: "Echo",
  R: "Romeo",
  F: "Foxtrot",
  S: "Sierra",
  G: "Golf",
  T: "Tango",
  H: "Hotel",
  U: "Uniform",
  I: "India",
  V: "Victor",
  J: "Juliett",
  W: "Whiskey",
  K: "Kilo",
  X: "Xray",
  L: "Lima",
  Y: "Yankee",
  M: "Mike",
  Z: "Zulu",
};

/**
 * @param {string} words
 * @returns {string}
 */
function toNato(words) {
  return words
    .toUpperCase()
    .split("")
    .filter((e) => e !== " ")
    .map((e) => NATO[e] ?? e)
    .join(" ");
} // toNato()

console.log(toNato("If, you can read?"));
