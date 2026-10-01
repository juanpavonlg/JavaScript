//@ts-check

/**
 * @param {string} time 
 * @returns {string}
 */
function fizzBuzzCuckooClock(time) {
  const [hh, mm] = time.split(":").map(Number);
  switch (true) {
    case mm === 0:
      return "Cuckoo ".repeat(hh % 12 || 12).trimEnd();
    case mm === 30:
      return "Cuckoo";
    case mm % 15 === 0:
      return "Fizz Buzz";
    case mm % 3 === 0:
      return "Fizz";
    case mm % 5 === 0:
      return "Buzz";
    default:
      return "tick";
  }
} // fizzBuzzCuckooClock()

console.log(fizzBuzzCuckooClock("13:34"));
console.log(fizzBuzzCuckooClock("21:00"));
console.log(fizzBuzzCuckooClock("11:15"));
console.log(fizzBuzzCuckooClock("03:03"));
console.log(fizzBuzzCuckooClock("14:30"));
console.log(fizzBuzzCuckooClock("08:55"));
console.log(fizzBuzzCuckooClock("00:00"));
console.log(fizzBuzzCuckooClock("12:00"));
