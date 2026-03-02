class Creature {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} издает звук`);
  }
}
class Dog extends Creature {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    console.log(`${this.name} (${this.breed}) гавкает!`);
  }
}
export { Creature, Dog };




