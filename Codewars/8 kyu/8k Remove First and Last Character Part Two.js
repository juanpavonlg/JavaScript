//@ts-check

/**
 * @param {string} string
 * @returns {string|null}
 */
function array(string) {
  // if ((string.match(/\w+/g) ?? []).length < 3) {
  //   return null;
  // }
  // return string.replace(/^\w+,/, "").replace(/,\w+$/, "").replace(/,/g, " ");
  return string.split(",").slice(1, -1).join(" ") || null;
} // array()

console.log(array("1,2,3"));
console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));
console.log(array(""));
console.log(array("1"));
console.log(array("1,2"));
