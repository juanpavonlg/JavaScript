var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
}; // greet()

console.log(greet("riley"));
console.log(greet("JACK"));
