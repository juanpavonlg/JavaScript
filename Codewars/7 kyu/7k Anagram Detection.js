var isAnagram = function(test, original) {
  test = test.toLowerCase();
  original = original.toLowerCase();
  const letters = {};
  for (const letter of test) {
    letters[letter] = letters[letter] ? letters[letter] + 1 : 1;
  }
  for (const letter of original) {letters
    letters[letter] = letters[letter] ? letters[letter] - 1 : Infinity;
  }
  return Object.values(letters).every((e) => e === 0);
}; // isAnagram()

console.log(isAnagram("foefet", "toffee"));
console.log(isAnagram("Buckethead", "DeathCubeK"));
