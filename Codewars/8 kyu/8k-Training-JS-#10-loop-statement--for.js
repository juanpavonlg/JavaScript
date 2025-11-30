function pickIt(arr) {
  var odd = [], even = [];
  for (const e of arr) {
    e % 2 ? odd.push(e) : even.push(e);
  }
  return [odd, even];
} // pickIt()

console.log(pickIt([8,1,5,4,6,1,1]));