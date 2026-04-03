"use strict";

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const person = new Person("Jane", "Doe");
console.log(person);
console.log(global.firstName);
console.log(global.lastName);
