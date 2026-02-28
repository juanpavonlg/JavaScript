function evil(n) {
  return (n.toString(2).match(/1/g) ?? []).length % 2
    ? "It's Odious!"
    : "It's Evil!";
} // evil()

console.log(evil(1));
console.log(evil(2));
console.log(evil(3));
