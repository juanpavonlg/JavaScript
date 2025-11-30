function rndCode() {
  return rndSeq("ABCDEFGHIJKLM", 2) + rndSeq("0123456789", 4) + rndSeq("~!@#$%^&*", 2);
} // rndCode()

function rndSeq(set, length) {
  let seq = "";
  for (let i = 0; i < length; i++) {
    seq += set[~~(set.length * Math.random())];
  }
  return seq;
} // rndSeq()

console.log(rndCode());
