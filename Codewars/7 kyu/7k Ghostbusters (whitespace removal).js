//@ts-check

/**
 * @param {string} building
 * @returns {string}
 */
function ghostBusters(building) {
  return / /.test(building)
    ? building.replace(/ /g, "")
    : "You just wanted my autograph didn't you?";
} // ghostBusters()

console.log(ghostBusters("Sky scra per"));
console.log(ghostBusters(ghostBusters("Sky scra per")));
