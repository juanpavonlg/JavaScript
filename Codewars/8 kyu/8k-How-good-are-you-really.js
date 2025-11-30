function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length; 
} // betterThanAverage()

console.log(betterThanAverage([4, 6], 5));
