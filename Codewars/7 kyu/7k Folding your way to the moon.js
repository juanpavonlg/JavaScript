function foldTo(distance) {
  if (distance < 0) {
    return null;
  } else if (distance < 0.0001) {
    return 0;
  }
  return Math.ceil(Math.log2(10000 * distance));
} // foldTo()

console.log(foldTo(384000000));
console.log(foldTo(0.002213881191792838));
