function min(arr, toReturn) {
  const min = Math.min(...arr);
  switch (toReturn) {
    case "value":
      return min;
    case "index":
      return arr.indexOf(min);
    default:
      return "Unknown option";
  } 
} // min()

console.log(min([1, 2, 3, 4, 5], "value"));
console.log(min([1, 2, 3, 4, 5], "index"));
