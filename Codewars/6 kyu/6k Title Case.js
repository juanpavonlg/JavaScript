function titleCase(title, minorWords) {
  const words = title ? title.toLowerCase().split(" ") : [];
  const minor = minorWords ? minorWords.toLowerCase().split(" ") : [];
  for (let i = 0; i < words.length; i++) {
    if (i === 0 || !minor.includes(words[i])) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(" ");
} // titleCase()

console.log(titleCase("a clash of KINGS", "a an the of"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
console.log(titleCase(""));
