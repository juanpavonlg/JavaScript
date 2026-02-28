function toFreud(string) {
  return string.replace(/[^ ]+/g, "sex");
} // toFreud()

console.log(toFreud(""));
console.log(toFreud("test"));
console.log(toFreud("This is a test"));
console.log(toFreud("This is a longer test"));
console.log(toFreud("You're becoming a true freudian expert"));
