import Drink from './Drink.js';

class Lemonade extends Drink {
    constructor(name, size, price, fruitType) {
        super(name, size, price, 5); 
        this.fruitType = fruitType;
    }

    serve() {
        console.log(`Наливаем холодный ${this.fruitType} лимонад...`);
        console.log(`Подаём напиток: ${this.name} со льдом`);
    }

    getInfo() {
        return `${super.getInfo()}, Вкус: ${this.fruitType}`;
    }
}

export default Lemonade;