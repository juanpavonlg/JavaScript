function Dog(breed) {
  this.breed = breed;

  this.bark = function () {
    return "Woof";
  }; // bark()
} // Dog()

var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");
console.log(snoopy.bark());
console.log(scoobydoo.bark());
