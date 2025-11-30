const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
}; // zeroFuel()

console.log(zeroFuel(100, 50, 2));
