function maxDiff(list) {  
  return list.length ? Math.max(...list) - Math.min(...list) : 0;
} // maxDiff()

console.log(maxDiff([1, 2, 3, 4]));
console.log(maxDiff([1, 2, 3, -4]));
console.log(maxDiff([]));
