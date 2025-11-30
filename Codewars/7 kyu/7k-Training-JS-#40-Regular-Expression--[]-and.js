var regex = /https?:\/\/[a-z0-9.]+\.(com|net)/gi;

console.log("http://codewars.com".match(regex));
console.log("https://www.codewars.com".match(regex));
console.log("http://www.codewars1.com!@#$%http://www.codewars2.net".match(regex));
console.log("1234http://www.codewars.comabcd".match(regex));
console.log("http://www.codewars.com.fak".match(regex));
console.log("ftp://www.codewars.com".match(regex));
console.log("http://.com".match(regex));
