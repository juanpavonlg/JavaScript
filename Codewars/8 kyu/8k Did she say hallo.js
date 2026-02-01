function validateHello(greetings) {
  return /h[aeo]l+[ao]|ciao|salut|ahoj|czesc/ig.test(greetings);
} // validateHello()

console.log(validateHello('ahoj'));
console.log(validateHello('meh'));
console.log(validateHello('hola'));
