//@ts-check

/**
 * @param {any} xs
 * @param {any} item
 * @returns {any}
 */
function nextItem(xs, item) {
  const iter = xs[Symbol.iterator]();
  for (const e of iter) {
    if (e === item) {
      return iter.next().value;
    }
  }
} // nextItem()

console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3));
console.log(nextItem("testing", "t"));
/**
 * @param {number} n
 */
function* countFrom(n) {
  for (let i = n; ; ++i) yield i;
} // countFrom()
console.log(nextItem(countFrom(1), 12));
