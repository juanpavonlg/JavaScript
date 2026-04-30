//@ts-check

/**
 * @param {string} string
 * @returns {number}
 */
function product(string) {
  return (
    [...string].filter((e) => e === "!").length *
    [...string].filter((e) => e === "?").length
  );
} // product()

console.log(product(""));
console.log(product("!"));
console.log(product("!ab? ?"));
console.log(product("!!"));
console.log(product("!??"));
console.log(product("!???"));
console.log(product("!!!??"));
console.log(product("!!!???"));
console.log(product("!???!!"));
console.log(product("!????!!!?"));
