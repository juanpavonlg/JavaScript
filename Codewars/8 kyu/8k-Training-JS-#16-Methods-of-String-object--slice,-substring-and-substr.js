function cutIt(arr) {
  let minLen = Number.MAX_VALUE;
  for (const str of arr) {
    minLen = str.length < minLen ? str.length : minLen;
  }
  return arr.map(e => e.slice(0, minLen));
} // cutIt()

console.log(cutIt(["codewars", "javascript", "java"]));
