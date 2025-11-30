function digitize(n) {
  return n.toString().split("").map(Number).reverse();
} // digitize()

console.log(digitize(35231));
