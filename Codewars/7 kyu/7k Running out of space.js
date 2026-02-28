function spacey(array) {
  let noSpace = "";
  return array.map((e) => (noSpace += e));
} // spacey()

console.log(spacey(["i", "have", "no", "space"]));
