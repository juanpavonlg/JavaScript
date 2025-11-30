function alienLanguage(str) {
  return str.toUpperCase().replace(/\w\b/g, ch => ch.toLowerCase());
} // alienLanguage()

console.log(alienLanguage("My name is John"));
