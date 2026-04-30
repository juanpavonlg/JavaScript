//@ts-check

/**
 * @param {string} fight
 * @returns {string}
 */
function alphabetWar(fight) {
  const powers = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let res = [...fight].reduce((a, e) => a + (powers[e] ?? 0), 0);
  return res
    ? `${res < 0 ? "Left" : "Right"} side wins!`
    : "Let's fight again!";
} // alphabetWar()

console.log(alphabetWar("z"));
console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
console.log(alphabetWar("wwwwwwz"));
