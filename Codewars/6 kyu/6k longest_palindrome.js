function longestPalindrome(s) {
  let len = 0;
  let l = 0;
  while (l < s.length) {
    let r = l;
    while (s[l] === s[r + 1]) {
      r++;
    }
    let k = 1;
    while (s[l - k] === s[r + k] && k < s.length - r) {
      k++;
    }
    len = Math.max(r + k - l + k - 1, len);
    if (len === s.length) {
      break;
    }
    l++;
  }
  return len;
} // longestPalindrome()

console.log(longestPalindrome("a"));
console.log(longestPalindrome("aab"));
console.log(longestPalindrome("abcde"));
console.log(longestPalindrome("zzbaabcd"));
console.log(longestPalindrome(""));
