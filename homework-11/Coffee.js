import Drink from './Drink.js';

class Coffee extends Drink {
    constructor(name, size, price, beansType, milkType) {
        super(name, size, price, 80); 
        this.beansType = beansType;
        this.milkType = milkType;
    }

    getInfo() {
        return `${super.getInfo()}, Зёрна: ${this.beansType}, Молоко: ${this.milkType}`;
    }
}

export default Coffee;