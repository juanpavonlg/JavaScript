function sortGiftCode(code) {
  return [...code].sort().join("");
} // sortGiftCode()

console.log(sortGiftCode("abcdef"));
console.log(sortGiftCode("kpqsuvy"));
console.log(sortGiftCode("abcdefghijklmnopqrstuvwxyz"));
