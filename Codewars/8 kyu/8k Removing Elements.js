function removeEveryOther(arr) {
  return arr.filter((_, i) => i % 2 === 0);
} // removeEveryOther()

console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));
