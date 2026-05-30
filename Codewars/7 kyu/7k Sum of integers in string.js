//@ts-check

/**
 * @param {string} s 
 * @returns {number}
 */
function sumOfIntegersInString(s) {
  return (s.match(/\d+/g) ?? []).reduce((a, e) => a + +e, 0);
} // sumOfIntegersInString()

console.log(
  sumOfIntegersInString(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
  ),
);
