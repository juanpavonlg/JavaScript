//@ts-check

class Animal {
  /**
   * @param {string} name
   * @param {number} age
   * @param {number} legs
   * @param {string} species
   * @param {string} status
   */
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  } // constructor()

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  } // introduce()
} // Animal

class Shark extends Animal {
  /**
   * @param {string} name
   * @param {number} age
   * @param {string} status
   */
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  } // constructor()
} // Shark

class Cat extends Animal {
  /**
   * @param {string} name
   * @param {number} age
   * @param {string} status
   */
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  } // constructor()

  introduce() {
    return `${super.introduce()}  Meow meow!`;
  } // introduce()
} // Cat

class Dog extends Animal {
  /**
   * @param {string} name
   * @param {number} age
   * @param {string} status
   * @param {string} master
   */
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  } // constructor()

  greetMaster() {
    return `Hello ${this.master}`;
  } // greetMaster()
} // Dog

const shark = new Shark("Billy", 3, "Alive and well");
console.log(shark.introduce());
const cat = new Cat("Cathy", 7, "Playing with a ball of yarn");
console.log(cat.introduce());
const dog = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(dog.greetMaster());
