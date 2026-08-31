//@ts-check

/**
 * @param {string} s 
 * @returns {string}
 */
function borrow(s) {
  return s.replace(/\W/g, "").toLowerCase();
} // borrow()

console.log(borrow("WhAt! FiCK! DaMn CAke?"));
console.log(borrow("THE big PeOpLE Here!!"));
console.log(borrow("i AM a TINY BoY!!"));
