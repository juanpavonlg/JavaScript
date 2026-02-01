function slope(points) {
  const dx = points[2] - points[0];
  return dx ? ((points[3] - points[1]) / dx).toString() : "undefined";
} // slope()

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));
console.log(slope([10, 50, 30, 150]));
console.log(slope([15, 45, 12, 60]));
console.log(slope([10, 20, 20, 80]));
console.log(slope([-10, 6, -10, 3]));
