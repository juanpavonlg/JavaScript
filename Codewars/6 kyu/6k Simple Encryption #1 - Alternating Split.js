function encrypt(text, n) {
  if (!text || n < 0) {
    return text;
  }
  let encryptedText = text;
  while (n--) {
    encryptedText =
      [...encryptedText].reduce((a, e, i) => a + (i % 2 ? e : ""), "") +
      [...encryptedText].reduce((a, e, i) => a + (i % 2 === 0 ? e : ""), "");
  }
  return encryptedText;
} // encrypt()

function decrypt(encryptedText, n) {
  if (!encryptedText || n < 0) {
    return encryptedText;
  }
  let text = encryptedText;
  while (n--) {
    let temp = "";
    let [o, e] = [1, (encryptedText.length / 2) | 0];
    for (let i = 0; i < text.length; i++) {
      temp += i % 2 ? text[i - o++] : text[i + e--];
    }
    text = temp;
  }
  return text;
} // decrypt()

console.log(encrypt("012345", 1));
console.log(encrypt("012345", 2));
console.log(encrypt("012345", 3));
console.log(encrypt("01234", 1));
console.log(encrypt("01234", 2));
console.log(encrypt("01234", 3));
console.log(decrypt("135024", 1));
console.log(decrypt("304152", 2));
console.log(decrypt("012345", 3));
console.log(decrypt("13024", 1));
console.log(decrypt("32104", 2));
console.log(decrypt("20314", 3));
