function filterString(value) {
  return +value.replace(/\D/g, "");
} // filterString()

console.log(filterString("123"));
console.log(filterString("a1b2c3"));
console.log(filterString("aa1bb2cc3dd"));
