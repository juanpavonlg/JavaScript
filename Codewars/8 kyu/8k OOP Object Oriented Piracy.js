//@ts-check

class Ship {
  /**
   * @param {number} draft 
   * @param {number} crew 
   */
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  } // constructor()

  /**
   * @returns {boolean}
   */
  isWorthIt() {
    return this.draft - 1.5 * this.crew > 20;
  } // isWorthIt()
} // Ship

const titanic = new Ship(15, 10);
console.log(titanic.isWorthIt());
