//@ts-check

/**
 * @typedef {Object} User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} country
 * @property {string} continent
 * @property {number} age
 * @property {string} language
 * @property {string} githubAdmin
 */

/**
 *
 * @param {User[]} list
 * @param {string} lang
 * @returns {User[]}
 */
function findAdmin(list, lang) {
  return list.filter((e) => e.language === lang && e.githubAdmin === "yes");
} // findAdmin()

const list1 = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 22,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 49,
    language: "Ruby",
    githubAdmin: "no",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 34,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
    githubAdmin: "no",
  },
];
console.log(findAdmin(list1, "JavaScript"));
