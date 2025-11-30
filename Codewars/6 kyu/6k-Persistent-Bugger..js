function persistence(num) {
  let pers = 0;
  num = num.toString();
  while (num.length > 1) {
    num = num.split("").map(Number).reduce((a, b) => a * b).toString();
    pers++;
  }
  return pers;
} // persistence()

console.log(persistence(39));
