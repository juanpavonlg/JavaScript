function printerError(s) {
  const errors = s.split("").filter(color => color > 'm');
  return `${errors.length}/${s.length}`
} // printerError()

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));
