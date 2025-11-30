var maxSequence = function(arr){
  let [max, curr] = [0, 0];
  for (const num of arr) {
    curr += num;
    max = Math.max(curr, max);
    if (curr < 0) {
      curr = 0;
    }
  }
  return max;
} // maxSequence()

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSequence([-3]));
