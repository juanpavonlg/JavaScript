function presses(phrase) {
  let ans = 0;
  for (const ch of phrase.toUpperCase()) {
    switch (true) {
      case /[BEHKNQUX0]/.test(ch):
        ans += 2;
        break;
      case /[CFILORVY]/.test(ch):
        ans += 3;
        break;
      case /[2-6S8Z]/.test(ch):
        ans += 4;
        break;
      case /[79]/.test(ch):
        ans += 5;
        break;
      default:
        ans++;
    }
  }
  return ans;
} // presses()

console.log(presses("WHERE DO U WANT 2 MEET L8R"));
