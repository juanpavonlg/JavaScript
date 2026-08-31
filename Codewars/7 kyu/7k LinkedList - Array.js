//@ts-check

/**
 * @typedef {Object} List
 * @property {number | string | boolean} value
 * @property {List | null} next
 */

/**
 * @param {List | null} list
 * @returns {(number | string | boolean)[]}
 */
function listToArray(list) {
  return list ? [list.value].concat(listToArray(list.next)) : [];
} // listToArray()

console.log(
  listToArray({ value: 1, next: { value: 2, next: { value: 3, next: null } } }),
);
