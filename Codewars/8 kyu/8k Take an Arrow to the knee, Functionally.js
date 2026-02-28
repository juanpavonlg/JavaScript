const arrowFunc = function (arr) {
  return arr.map((e) => String.fromCharCode(e)).join("");
}; // arrowFunc()

console.log(arrowFunc([84, 101, 115, 116]));
console.log(arrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));
