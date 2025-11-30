function grow(x){
  return x.reduce((a, b) => a * b);
} // grow()

console.log(grow([1, 2, 3]));
