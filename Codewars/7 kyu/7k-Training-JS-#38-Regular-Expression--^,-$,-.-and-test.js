function findSimilarity(str, word) {
  const regExp = new RegExp(`^${word[0]}${word.slice(1, -1).replace(/./g, ".")}${word.slice(-1)}$`);
  return str.split(" ").filter(w => regExp.test(w)).join(" ");
} // findSimilarity()

console.log(findSimilarity("bag dog dig dot doog dogs", "dog"));
