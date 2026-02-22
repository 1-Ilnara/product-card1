class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} издает звук`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  makeSound() {
    console.log(`${this.name} (${this.breed}) гавкает!`);
  }
}

// Side-effect: при импорте этого файла в консоли сразу появится сообщение
const myDog = new Dog('Бобик', 'Овчарка');
myDog.makeSound();