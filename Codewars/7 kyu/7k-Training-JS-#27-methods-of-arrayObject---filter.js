function countGrade(scores) {
  const count = (min, max) => scores.filter((s) => s >= min && s < max).length;
  return {
    S: count(100, 101),
    A: count(90, 100),
    B: count(80, 90),
    C: count(60, 80),
    D: count(0, 60),
    X: count(-1, 0),
  };
} // countGrade()

console.log(countGrade([50, 60, 70, 80, 90, 100]));
