class Cafe {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    getInfo() {
        console.log(`Кафе: ${this.name}, Адрес: ${this.location}`);
    }

    orderDrink(drink) {
        console.log('Получили заказ на напиток...');
        console.log(drink.getInfo());
        drink.serve();
        console.log('Напиток готов!');
    }
}

export default Cafe;