class Person {
  sayHi = () => {
    console.log(`Hi, my name is ${this.firstName}!`);
  };

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("John", "Doe");
const greet = person.sayHi;
greet();
