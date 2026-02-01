function billboard(name, price = 30) {
  let ans = 0;
  for (const ch of name) {
    ans += price;
  }
  return ans;
} // billboard()

console.log(billboard("Jeong-Ho Aristotelis"));
