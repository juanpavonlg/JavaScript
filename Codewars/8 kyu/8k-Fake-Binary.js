function fakeBin(x){
  return x.split("").map(digit => digit < 5 ? 0 : 1).join("");
} // fakeBin()

console.log(fakeBin('45385593107843568'));
