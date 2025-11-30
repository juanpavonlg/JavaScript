function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
} // DNAtoRNA()

console.log(DNAtoRNA("GCAT"));
