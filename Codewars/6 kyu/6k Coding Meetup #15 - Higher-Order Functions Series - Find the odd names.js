//@ts-check

/**
 * @typedef {Object} Developer
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} country
 * @property {string} continent
 * @property {number} age
 * @property {string} language
 */

/**
 * @param {Developer[]} list
 * @returns {Developer[]}
 */
function findOddNames(list) {
  return list.filter(
    (e) => [...e.firstName].reduce((a, e) => a + e.charCodeAt(0), 0) % 2,
  );
} // findOddNames()

const list1 = [
  {
    firstName: "Aba",
    lastName: "N.",
    country: "Ghana",
    continent: "Africa",
    age: 21,
    language: "Python",
  },
  {
    firstName: "Abb",
    lastName: "O.",
    country: "Israel",
    continent: "Asia",
    age: 39,
    language: "Java",
  },
];
console.log(findOddNames(list1));
