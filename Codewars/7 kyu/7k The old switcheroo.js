function vowel2index(str) {
  return str.replace(/[aeiou]/ig, (_, i) => i + 1);
} // vowel2index()

console.log(vowel2index("this is my string"));
console.log(vowel2index("Codewars is the best site in the world"));
console.log(vowel2index(""));
