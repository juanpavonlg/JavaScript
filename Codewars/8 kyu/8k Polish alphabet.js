function correctPolishLetters(string) {
  const polish = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.replace(/[ąćęłńóśźż]/ig, (e) => polish[e]);
} // correctPolishLetters()

console.log(correctPolishLetters("Jędrzej Błądziński"));
