Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.filter((e) => e === element).length;
  }
}); // numberOfOccurrences()

const arr = [0, 1, 2, 2, 3];
console.log(arr.numberOfOccurrences(0));
console.log(arr.numberOfOccurrences(4));
console.log(arr.numberOfOccurrences(2));
console.log(arr.numberOfOccurrences(3));
