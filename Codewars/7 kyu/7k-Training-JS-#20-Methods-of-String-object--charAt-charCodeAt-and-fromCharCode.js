function topSecret(str) {
  let secret = "";
  for (const ch of str) {
    let code = ch.charCodeAt();
    if (code >= 65 && code <= 90) {
      code = code - 3 >= 65 ? code - 3 : 91 - (65 - (code - 3));
    } else if (code >= 97 && code <= 122) {
      code = code - 3 >= 97 ? code - 3 : 123 - (97 - (code - 3));
    }
    secret += String.fromCharCode(code);
  }
  return secret;
} // topSecret()

console.log(topSecret("Khoor Zruog!"));
console.log(topSecret("ABC"));
console.log(topSecret(`Wrs vhfuhw ilohv: Qr. 2330
Vxshu djhqw ePr, rq d gdun qljkw, vwroh wkh elug'v qhvw iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh.`));
