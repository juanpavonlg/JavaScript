//@ts-check

/**
 * @param {number[]} l
 * @returns {number[]}
 */
function copyList(l) {
  return [...l];
} // copyList()

const t = [1, 2, 3, 4];
const tCopy = copyList(t);
t[1] += 5;
console.log(t);
console.log(tCopy);
