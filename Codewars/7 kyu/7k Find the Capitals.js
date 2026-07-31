//@ts-check

/**
 * @param {{state?: string, country?: string, capital: string}[]} capitals
 * @returns {string[]}
 */
function capital(capitals) {
  return capitals.map(
    (e) => `The capital of ${e.country ?? e.state} is ${e.capital}`,
  );
} // capital()

const state_capitals = [{ state: "Maine", capital: "Augusta" }];
console.log(capital(state_capitals)[0]);
const country_capitals = [{ country: "Spain", capital: "Madrid" }];
console.log(capital(country_capitals)[0]);
const mixed_capitals = [
  { state: "Maine", capital: "Augusta" },
  { country: "Spain", capital: "Madrid" },
];
console.log(capital(mixed_capitals)[1]);
