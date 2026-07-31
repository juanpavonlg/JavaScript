//@ts-check

/**
 * @param {string} name
 * @returns {string}
 */
function nicknameGenerator(name) {
  if (name.length < 4) {
    return "Error: Name too short";
  }
  return name.slice(0, 3 + +/[aeiou]/.test(name[2]));
} // nicknameGenerator()

console.log(nicknameGenerator("Robert"));
console.log(nicknameGenerator("Kimberly"));
console.log(nicknameGenerator("Samantha"));
console.log(nicknameGenerator("Jeannie"));
console.log(nicknameGenerator("Douglas"));
console.log(nicknameGenerator("Gregory"));
