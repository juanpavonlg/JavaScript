function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
} // sortByLength()

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));
