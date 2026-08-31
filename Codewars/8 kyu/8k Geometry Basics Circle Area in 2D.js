//@ts-check

class Circle {
  /**
   * @param {Point} center
   * @param {number} radius
   */
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  } // constructor()
} // Circle

class Point {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  } // constructor()
} // Point()

/**
 * @param {Circle} circle
 * @returns {number}
 */
function circleArea(circle) {
  return Math.PI * circle.radius ** 2;
} // circleArea()

console.log(circleArea(new Circle(new Point(10, 10), 30)));
console.log(circleArea(new Circle(new Point(25, -70), 30)));
console.log(circleArea(new Circle(new Point(-15, 5), 0)));
console.log(circleArea(new Circle(new Point(-15, 5), 12.5)));
