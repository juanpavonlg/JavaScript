function spEng(sentence){
  return /english/i.test(sentence);
} // spEng()

console.log(spEng("english"));
console.log(spEng("egnlish"));
