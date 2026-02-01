function uniTotal(string) {
  return [...string].reduce((a, e) => a + e.charCodeAt(0), 0);
} // uniTotal()

console.log(uniTotal("a"));
console.log(uniTotal("aaa"));
