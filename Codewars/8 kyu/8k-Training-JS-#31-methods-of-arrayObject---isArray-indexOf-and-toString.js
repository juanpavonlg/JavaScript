function blackAndWhite(arr) {
  return `It's a ${!Array.isArray(arr) ? "fake" : arr.indexOf(5) > -1 && arr.indexOf(13) > -1 ? "black" : "white"} array`  
} // blackAndWhite()

console.log(blackAndWhite([5,13]));
