//@ts-check

/**
 * @param {{[key: string]: string[]}} suspectInfo 
 * @param {string[]} dead
 * @returns {string}
 */
function killer(suspectInfo, dead) {
  for (const suspect in suspectInfo) {
    if (dead.every((e) => suspectInfo[suspect].includes(e))) {
      return suspect;
    }
  }
  return "";
} // killer()

console.log(
  killer(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"],
    },
    ["Lucas", "Bill"],
  ),
);
