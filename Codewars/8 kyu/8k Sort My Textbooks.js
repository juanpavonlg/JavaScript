//@ts-check

/**
 * @param {string[]} textbooks
 * @returns {string[]}
 */
function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    const la = a.toLowerCase();
    const lb = b.toLowerCase();
    return la < lb ? -1 : la > lb ? 1 : 0;
  });
} // sorter()

console.log(sorter(["Algebra", "History", "Geometry", "English"]));
console.log(sorter(["Algebra", "history", "Geometry", "english"]));
console.log(sorter(["Alg#bra", "$istory", "Geom^try", "**english"]));
