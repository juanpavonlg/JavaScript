function duplicateCount(text){
  text = text.toUpperCase().split("");
  const uniques = [];
  const repeated = new Set();
  for (const char of text) {
    uniques.includes(char) ? repeated.add(char) : uniques.push(char);
  }
  return repeated.size;
} // duplicateCount()

console.log(duplicateCount("aabbcde"));
