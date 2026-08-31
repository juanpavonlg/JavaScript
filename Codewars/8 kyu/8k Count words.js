//@ts-check

/**
 * @param {string} str
 * @returns {number}
 */
function countWords(str) {
  return (str.match(/[^\s]+/g) ?? []).length;
} // countWords()

console.log(countWords("Hello"));
console.log(countWords("Hello, World!"));
console.log(countWords("No results for search term `s`"));
console.log(countWords(" Hello"));
console.log(countWords("﻿Hello﻿World "));
