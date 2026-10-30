//@ts-check

/**
 * @param {string} timeInMirror
 * @returns {string}
 */
function WhatIsTheTime(timeInMirror) {
  let [hh, mm] = timeInMirror.split(":").map(Number);
  hh = (mm ? 11 : 12) - (hh % 12) || 12;
  mm = (60 - mm) % 60;
  return `${`${hh}`.padStart(2, "0")}:${`${mm}`.padStart(2, "0")}`;
} // WhatIsTheTime()

console.log(WhatIsTheTime("12:22"));
console.log(WhatIsTheTime("05:25"));
console.log(WhatIsTheTime("01:50"));
console.log(WhatIsTheTime("11:58"));
console.log(WhatIsTheTime("12:01"));
