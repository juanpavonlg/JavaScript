function flickSwitch(arr) {
  let flick = true;
  return arr.map((e) => e === "flick" ? flick = !flick : flick);
} // flickSwitch()

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
