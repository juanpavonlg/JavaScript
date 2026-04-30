//@ts-check

/**
 * @param {number[]} x
 * @returns {number[]}
 */
var filterLucky = (x) => {
  return x.filter((e) => `${e}`.includes("7"));
}; // filterLucky()

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
