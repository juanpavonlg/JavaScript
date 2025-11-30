function findNextSquare(sq) {
  sq = Math.sqrt(sq);
  return sq - Math.round(sq) ? -1 : ++sq ** 2;
} // findNextSquare()

console.log(findNextSquare(121));