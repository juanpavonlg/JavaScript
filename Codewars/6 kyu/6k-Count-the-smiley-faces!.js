//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.filter(smiley => smiley.match(/^[:;][-~]?[)D]$/)).length;
} // countSmileys()

console.log(countSmileys([ ':-)', ';~D', ':-D', ':_D', ':)' ]));
