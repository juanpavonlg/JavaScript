function getLength(arr){
  //return length of arr
  return arr.length;
} // getLength()

function getFirst(arr){
  //return the first element of arr
  return arr[0];
} // getFirst()

function getLast(arr){
  //return the last element of arr
  return arr[arr.length - 1];
} // getLast()

function pushElement(arr){
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
} // pushElement()

function popElement(arr){
  //pop an element from arr
  const el = arr.pop();
  return arr;
} // popElement()

console.log(getLength([1,2,3]), getFirst([1,2,3]), getLast([1,2,3]), pushElement([1,2,3]), popElement([1,2,3]));