function tailAndHead(arr) {
  arr = arr.map(String);
  const res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(+arr[i].slice(-1) + +arr[i + 1].charAt(0));
  }
  return res.reduce((a, b) => a * b, 1);
} // tailAndHead()

console.log(tailAndHead([1,2,3,4,5]));
