function grabDoll(dolls) {
  var bag = [];
  for (const doll of dolls) {
    if (doll !== "Hello Kitty" && doll !== "Barbie doll") {
      continue;
    }
    bag.push(doll);
    if (bag.length === 3) {
      break;
    }
  }
  return bag;
} // grabDoll()

console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]));
