var regex = /\d(?=(\d{3})+$)/g;

function addCommas(money, reg) {
  return money.replace(reg, x => x + ",");
} // addCommas()

console.log(addCommas("$123", regex));
console.log(addCommas("$1234", regex));
console.log(addCommas("$12345", regex));
console.log(addCommas("$1234567", regex));
