class Fighter {
  #name;
  get name() {
    return this.#name;
  } // name()
  #damagePerAttack;
  get damagePerAttack() {
    return this.#damagePerAttack;
  } // damagePerAttack()

  constructor(name, health, damagePerAttack) {
    this.#name = name;
    this.#damagePerAttack = damagePerAttack;
    this.health = health;
  } // constructor()
} // Fighter

function declareWinner(fighter1, fighter2, firstAttacker) {
  if (fighter1.name !== firstAttacker) {
    return declareWinner(fighter2, fighter1, firstAttacker);
  }
  if (fighter1.health <= 0) {
    return fighter2.name;
  }
  if (fighter2.health <= 0) {
    return fighter1.name;
  }
  fighter2.health -= fighter1.damagePerAttack;
  return declareWinner(fighter2, fighter1, fighter2.name);
} // declareWinner()

console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"),
);
