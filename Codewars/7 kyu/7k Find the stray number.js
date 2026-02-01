function stray(numbers) {
  return numbers.find((e) => numbers.indexOf(e) === numbers.lastIndexOf(e));
} // stray()

console.log(stray([1, 1, 2]));
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
