function domainName(url) {
  return url.match(/(https?:\/\/)?(www\.)?(.+?)\./)[3];
} // domainName()

console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("https://www.cnet.com"));
console.log(domainName("http://google.co.jp"));
