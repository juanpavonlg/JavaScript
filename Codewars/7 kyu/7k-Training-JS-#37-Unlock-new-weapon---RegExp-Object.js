function countAnimals(animals, count) {
  return count.map(a => (animals.match(new RegExp(a, "g"))  || []).length);
} // countAnimals()

console.log(countAnimals("dog,cat", ["dog", "cat", "pig"]));
console.log(countAnimals("dog,dog,cat", ["dog", "cat"]));
