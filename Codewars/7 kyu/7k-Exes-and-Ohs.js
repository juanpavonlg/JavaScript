function XO(str) {
  const xs = str.match(/x/gi) ?? [];
  const os = str.match(/o/gi) ?? [];
  return xs.length === os.length;
} // XO()

console.log(XO("abc"));
