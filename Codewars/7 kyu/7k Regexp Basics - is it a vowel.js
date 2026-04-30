String.prototype.vowel = function () {
  return /^[aeiou]$/i.test(this);
}; // vowel()

console.log("".vowel());
console.log("a".vowel());
console.log("E".vowel());
console.log("ou".vowel());
console.log("z".vowel());
console.log("lol".vowel());
