function filter_list(l) {
  return l.filter(x => Number.isInteger(x));
} // filter_list()

console.log(filter_list([1, 'a', 'b', 0, 15]));
