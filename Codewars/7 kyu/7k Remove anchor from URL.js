function removeUrlAnchor(url) {
  return url.match(/^[^#]*/)[0];
} // removeUrlAnchor()

console.log(removeUrlAnchor("www.codewars.com#about"));
console.log(removeUrlAnchor("www.codewars.com?page=1"));
console.log(removeUrlAnchor(""));
