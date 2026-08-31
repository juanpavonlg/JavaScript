//@ts-check

/**
 * @param {{[key: string]: any}} hash 
 * @returns {[string, any][]}
 */
function convertHashToArray(hash) {
  return Object.entries(hash).sort();
} // convertHashToArray()

console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" }),
);
