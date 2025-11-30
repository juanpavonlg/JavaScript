function isPalindrome(x) {
  return x.toLowerCase() === x.split("").reverse().join("").toLowerCase();
} // isPalindrome()

console.log(isPalindrome("Abba"));
