function bandNameGenerator(str) {
  const first = str[0].toUpperCase();
  const tail = str.slice(1);
  return str[0] === str.at(-1) ? first + tail + tail : "The " + first + tail;
} // bandNameGenerator()

console.log(bandNameGenerator("dolphin"));
console.log(bandNameGenerator("alaska"));
