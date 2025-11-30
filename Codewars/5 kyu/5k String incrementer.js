function incrementString(strng) {
  if (/\d+$/.test(strng)) {
    return strng.replace(/\d+$/, (n) => (+n + 1).toString().padStart(n.length, "0"));
  }
  return strng + "1";
} // incrementString()

console.log(incrementString("foo"));
console.log(incrementString("foobar23"));
console.log(incrementString("foo0042"));
console.log(incrementString("foo9"));
console.log(incrementString("foo099"));
console.log(incrementString("fo99obar99"));
