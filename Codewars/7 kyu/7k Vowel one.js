//@ts-check

/**
 * @param {string} s
 * @returns {string} 
 */
function vowelOne(s){
  return s.replace(/[^aeiou]/gi, "0").replace(/[aeiou]/gi, "1");
} // vowelOne()

console.log(vowelOne("abceios"));
console.log(vowelOne("aeiou, abc"));
