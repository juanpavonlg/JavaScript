function padIt(str, n) {
  while (n) {
    str = n-- % 2 ? "*" + str : str + "*";
  }
  return str;
} // padIt()

console.log(padIt("a", 3));