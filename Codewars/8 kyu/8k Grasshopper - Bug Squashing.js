const log = [];
const rollDice = () => log.push("rollDice");
const move = () => log.push("move");
const combat = () => log.push("combat");
const getCoins = () => log.push("getCoins");
const buyHealth = () => log.push("buyHealth");
const printStatus = () => log.push("printStatus");

var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
} // main()

main();
console.log(log[0]);
console.log(log[1]);
console.log(log[2]);
console.log(log[3]);
console.log(log[4]);
console.log(log[5]);
