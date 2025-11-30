var regex = /\b(\w)(\w?)(\w?)\w?\3\2\1\b/g;

console.log("a aa bbb cccc ddddd eeeeee fffffff".match(regex));
console.log("aaa bcccd ___".match(regex));
console.log("_x_x_ --- ~~|~~".match(regex));
console.log("121 1221 13577531 11211".match(regex));
