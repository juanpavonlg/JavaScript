function arithmeticSequenceElements(a, d, n) {
  const sequence = [];
  for (let i = 0; i < n; i++) {
    sequence.push(a + d * i);
  }
  console.log(sequence);

  return sequence.join(", ");
} // arithmeticSequenceElements()

console.log(arithmeticSequenceElements(1, 2, 5));
