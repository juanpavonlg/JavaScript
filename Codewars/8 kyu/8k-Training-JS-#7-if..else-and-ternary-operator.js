function saleHotdogs(n) {
  return n < 5 ? 100 * n : n < 10 ? 95 * n : 90 * n;
} // saleHotdogs()

console.log(saleHotdogs(7));