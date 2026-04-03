function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return null;
}

const person = new Person("Jane", "Doe");
console.log(person);
