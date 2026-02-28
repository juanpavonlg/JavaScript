class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  } // constructor()

  guess(n) {
    if (!this.lives) {
      throw new Error("Already dead!");
    }
    if (n === this.number) {
      return true;
    }
    this.lives--;
    return false;
  } // guess()
} // Guesser

let guesser = new Guesser(10, 2);
console.log(guesser.guess(10));
console.log(guesser.guess(1));
console.log(guesser.guess(2));
console.log(guesser.guess(10));
