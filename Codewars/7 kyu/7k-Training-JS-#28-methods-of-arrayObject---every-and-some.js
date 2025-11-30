function mirrorImage(arr) {
  let a, b;
  return arr.some((n, i) => {
    a = n;
    b = arr[i + 1];
    if (b) {
      return mirror(n, arr[i + 1]);
    } else {
      return false;
    }
  }) ? [a, b] : [-1, -1];
} // mirrorImage()

function mirror(n1, n2) {
  n1 = n1.toString().split("");
  n2 = n2.toString().split("");
  return n1.every((d, i) => d === n2[n2.length - 1 - i]);
} // mirror()

console.log(mirrorImage([454, 86, 57, 75, 16, 88]));
console.log(mirrorImage([454, 0, 57, 0, 16, 88]));
console.log(mirror(57, 75));
