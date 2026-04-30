//@ts-check

/**
 * @param {string} fight
 * @returns {string}
 */
function alphabetWar(fight) {
  const powers = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  const res = [...fight.replace(/[^*]?\*+[^*]?/g, "")].reduce(
    (a, e) => a + (powers[e] ?? 0),
    0,
  );
  return res
    ? `${res < 0 ? "Left" : "Right"} side wins!`
    : "Let's fight again!";
} // alphabetWar()

console.log(alphabetWar("s*zz"));
console.log(alphabetWar("*zd*qm*wp*bs*"));
console.log(alphabetWar("zzzz*s*"));
console.log(alphabetWar("www*www****z"));
