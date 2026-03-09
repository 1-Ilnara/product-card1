import Drink from './Drink.js';

class Tea extends Drink {
    constructor(name, size, price, teaType) {
        super(name, size, price, 85); 
        this.teaType = teaType;
    }

    getInfo() {
        return `${super.getInfo()}, Тип чая: ${this.teaType}`;
    }
}

export default Tea;