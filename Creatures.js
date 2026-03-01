class Creatures {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Creatures {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    console.log(`${this.name} (${this.breed}) гавкает!`);
  }
}

const myDog = new Dog('Бобик', 'Овчарка');
myDog.makeSound();



