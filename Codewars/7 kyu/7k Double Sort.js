//@ts-check

/**
 * @param {(number|string)[]} a 
 * @returns {(number|string)[]} 
 */
function dbSort(a) {
  return a.sort((x, y) => {
    if (typeof x === "number" && typeof y === "number") {
      return x - y;
    } else if (typeof x === "string" && typeof y === "string") {
      return x.localeCompare(y);
    }
    return typeof x === "number" ? -1 : 1;
  });
} // dbSort()

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort([14, 32, 3, 5, 5]));
console.log(dbSort([1, 2, 3, 4, 5]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]));
console.log(
  dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]),
);
