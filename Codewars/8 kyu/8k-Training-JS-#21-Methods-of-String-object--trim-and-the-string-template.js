function fiveLine(s) {
  s = s.trim();
  return `${s}\n${s}${s}\n${s}${s}${s}\n${s}${s}${s}${s}\n${s}${s}${s}${s}${s}`;
} // fiveLine()

console.log(fiveLine("   a   "));
