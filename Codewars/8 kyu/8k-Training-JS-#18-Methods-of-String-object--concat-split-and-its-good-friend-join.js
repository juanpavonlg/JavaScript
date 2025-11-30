function splitAndMerge(string, separator) {
  return string.split(" ").map(word => word.split("").join(separator)).join(" ");
} // splitAndMerge()

console.log(splitAndMerge("My name is John", " "));