//@ts-check

const MrFreeze = {
  speak: () => {
    return "hi";
  }, // speak()
}; // MrFreeze

Object.freeze(MrFreeze);
// MrFreeze.speak = function () {
//   return 1;
// };
console.log(MrFreeze.speak());
console.log(Object.isFrozen(MrFreeze));
