function multiplyAll(arr) {
  return function (n) {
    return arr.map((e) => n * e);
  };
} // multiplyAll()

console.log(multiplyAll([1, 2, 3])(2));
