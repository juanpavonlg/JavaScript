var regex = /^-?9.*0{4}$/;

console.log(regex.test("90000"));
console.log(regex.test("-90000"));
console.log(regex.test("190000"));
console.log(regex.test("-90000123"));
