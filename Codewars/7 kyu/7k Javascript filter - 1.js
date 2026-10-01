//@ts-check

/**
 * @param {string[][]} logins
 * @returns {string[][]}
 */
function searchNames(logins) {
  return logins.filter((e) => e[0].endsWith("_"));
} // searchNames()

console.log(
  searchNames([
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"],
  ]),
);
