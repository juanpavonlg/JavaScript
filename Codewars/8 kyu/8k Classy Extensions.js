class Animal {
  constructor(name) {
    this.name = name;
  } // constructor()

  speak() {
    return this.name + " makes a noise.";
  } // speak()
} // Animal

class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
} // Cat

const cat = new Cat("Mr Whiskers");
console.log(cat.speak());
