class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  } // constructor()

  get info() {
    return `${this.#name}s age is ${this.#age}`;
  } // info()
} // Person

const john = new Person("john", 34);
console.log(john.info);
