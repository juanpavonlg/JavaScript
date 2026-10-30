//@ts-check

/**
 * @param {string} date1
 * @param {string} date2
 * @returns {number}
 */
var howManyYears = function (date1, date2) {
  return Math.abs(getYear(date1) - getYear(date2));
}; // howManyYears()

/**
 * @param {string} date
 * @returns {number}
 */
const getYear = function (date) {
  return +date.split("/")[0];
}; // getYear()

console.log(howManyYears("1997/10/10", "2015/10/10"));
console.log(howManyYears("2015/10/10", "1997/10/10"));
