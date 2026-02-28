function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
} // whoIsPaying()

console.log(whoIsPaying("Mexico"));
console.log(whoIsPaying("Melania"));
console.log(whoIsPaying("Melissa"));
console.log(whoIsPaying("Me"));
