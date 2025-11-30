const shuffleIt = (arr, ...arrs) => {
  arrs.every(a => [arr[a[0]], arr[a[1]]] = [arr[a[1]], arr[a[0]]]);
  return arr;
} // shuffleIt()

console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]));
