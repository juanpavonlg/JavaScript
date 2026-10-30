//@ts-check

/**
 * @param {string} name
 * @param {string} breed
 * @param {string} sex
 * @param {string} age
 */
function Dog(name, breed, sex, age) {
  this.name = name;
  this.breed = breed;
  this.sex = sex;
  this.age = age;
} // Dog()

Dog.prototype.bark = () => {
  return "Woof!";
}; // bark()

const apollo = new Dog("Apollo", "Dobermann", "male", "4");
const zeus = new Dog("Zeus", "Dobermann", "male", "4");
console.log(apollo.bark());
console.log(zeus.bark());
