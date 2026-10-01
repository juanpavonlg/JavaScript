//@ts-check

/**
 * @typedef {Object} Developer
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} country
 * @property {string} continent
 * @property {number} age
 * @property {string} language
 * @property {string} meal
 */

/**
 * @param {Developer[]} list
 * @returns {{[key: string]: number}}
 */
function orderFood(list) {
  return list.reduce((a, e) => ((a[e.meal] = (a[e.meal] ?? 0) + 1), a), {});
} // orderFood()

const list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
    meal: "vegetarian",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
    meal: "standard",
  },
  {
    firstName: "Ramona",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
    meal: "vegan",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
    meal: "vegetarian",
  },
];
console.log(orderFood(list1));
