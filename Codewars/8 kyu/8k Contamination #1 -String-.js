function contamination(text, char) {
  return text.replace(/./g, char);
} // contamination()

console.log(contamination("abc", "z"));
