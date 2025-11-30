function rot13(message) {
  let cypher = "";
  for (const char of message) {
    let code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      code = (code + 13 - 65) % 26 + 65;
    } else if (code >= 97 && code <= 122) {
      code = (code + 13 - 97) % 26 + 97;
    }
    cypher += String.fromCharCode(code);
  }
  return cypher;
} // rot13()

console.log(rot13("test"));
