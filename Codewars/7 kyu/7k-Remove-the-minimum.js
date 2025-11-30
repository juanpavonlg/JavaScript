function removeSmallest(numbers) {
  const indexMin = numbers.indexOf(Math.min(...numbers));
  return numbers.filter((n, i) => i !== indexMin);
} // removeSmallest()

console.log(removeSmallest([1, 2, 3, 4, 5]));
