function multiply(a, b) {
  const x = [...a].map(Number).reverse();
  const y = [...b].map(Number).reverse();
  const mat = Array.from({ length: y.length }, () =>
    new Array(x.length + y.length).fill(0),
  );
  const res = new Array(x.length + y.length).fill(0);
  for (let r = 0; r < y.length; r++) {
    let carry = 0;
    let c = 0;
    for (; c < x.length; c++) {
      const sum = y[r] * x[c] + carry;
      mat[r][c + r] = sum % 10;
      carry = (sum / 10) | 0;
    }
    mat[r][c + r] = carry;
  }
  let carry = 0;
  for (let c = 0; c < mat[0].length; c++) {
    let sum = 0;
    for (let r = 0; r < mat.length; r++) {
      sum += mat[r][c];
    }
    sum += carry;
    res[c] = sum % 10;
    carry = (sum / 10) | 0;
  }
  return res.reverse().join("").replace(/^(0(?!$))+/, "");
} // multiply()

console.log(multiply("2", "3"));
console.log(multiply("30", "69"));
console.log(multiply("11", "85"));
console.log(multiply("2", "0"));
console.log(multiply("0", "30"));
console.log(multiply("0000001", "3"));
console.log(multiply("1009", "03"));
console.log(multiply("98765", "56894"));
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));
console.log(multiply("58608473622772837728372827", "7586374672263726736374"));
console.log(multiply("9007199254740991", "9007199254740991"));
