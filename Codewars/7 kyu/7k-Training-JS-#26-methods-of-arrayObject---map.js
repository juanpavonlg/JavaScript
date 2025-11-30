function isolateIt(arr) {
  return arr.map(str => str.slice(0, str.length / 2) + "|" + str.slice(str.length / 2 + str.length % 2));  
} // isolateIt()

console.log(isolateIt(["1234", "56789"]));
