function roundIt(n) {
  const a = n.toString().split(".");
  return a[0].length < a[1].length ? Math.ceil(n) : a[0].length > a[1].length ? Math.floor(n) : Math.round(n);
} // roundIt()

console.log(roundIt(3.45));
console.log(roundIt(34.5));
console.log(roundIt(34.56));
