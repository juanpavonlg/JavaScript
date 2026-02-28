function swap(string) {
  return string.replace(/[aeiou]/g, (e) => e.toUpperCase());
} // swap()

console.log(swap("Hello World!"));
