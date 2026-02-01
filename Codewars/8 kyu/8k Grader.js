function grader(score) {
  switch (true) {
    case score < 0.6 || score > 1:
      return "F";
    case score < 0.7:
      return "D";
    case score < 0.8:
      return "C";
    case score < 0.9:
      return "B";
    default:
      return "A";
  }
} // grader()

console.log(grader(0));
console.log(grader(1.1));
console.log(grader(0.9));
console.log(grader(0.8));
console.log(grader(0.7));
console.log(grader(0.6));
