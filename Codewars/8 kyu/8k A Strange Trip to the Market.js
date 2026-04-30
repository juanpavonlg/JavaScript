//@ts-check

/**
 * @param {string} s 
 * @returns {boolean}
 */
function isLochNessMonster(s) {
  return /tree fiddy|3\.50|three fifty/.test(s);
} // isLochNessMonster()

console.log(
  isLochNessMonster(
    "Your girlscout cookies are ready to ship. Your total comes to tree fiddy",
  ),
);
console.log(
  isLochNessMonster(
    "Howdy Pardner. Name's Pete Lexington. I reckon you're the kinda stiff who carries about tree fiddy?",
  ),
);
console.log(
  isLochNessMonster(
    "I'm from Scottland. I moved here to be with my family sir. Please, $3.50 would go a long way to help me find them",
  ),
);
console.log(
  isLochNessMonster(
    "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance.",
  ),
);
console.log(
  isLochNessMonster(
    "I will absolutely, positively, never give that darn Lock Ness Monster any of my three dollars and fifty cents",
  ),
);
console.log(
  isLochNessMonster(
    "Did I ever tell you about my run with that paleolithic beast? He tried all sorts of ways to get at my three dolla and fitty cent? I told him 'this is MY 4 dolla!'. He just wouldn't listen.",
  ),
);
console.log(
  isLochNessMonster("Hello, I come from the year 3150 to bring you good news!"),
);
console.log(isLochNessMonster("By 'tree fiddy' I mean 'three fifty'"));
console.log(
  isLochNessMonster(
    "I will be at the office by 3:50 or maybe a bit earlier, but definitely not before 3, to discuss with 50 clients",
  ),
);
console.log(isLochNessMonster("tree fifty"));
console.log(isLochNessMonster("three fiddy"));
console.log(isLochNessMonster(""));
console.log(isLochNessMonster("jbphtnslzs 4255 three fifty q wq"));
