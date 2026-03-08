class Drink {
    #temperature; 

    constructor(name, size, price, temperature) {
        if (new.target === Drink) {
            throw new Error('Нельзя создать экземпляр абстрактного класса Drink!');
        }
        this.name = name;
        this.size = size;
        this.price = price;
        this.#temperature = temperature;
    }

    getTemperature() {
        return this.#temperature;
    }

    setTemperature(newTemp) {
        console.log('Меняем температуру напитка...');
        this.#temperature = newTemp;
    }

    #prepare() {
        console.log('Готовим напиток...');
        this.setTemperature(60);
    }

    serve() {
        console.log(`Подаём напиток: ${this.name}`);
        this.#prepare();
    }

    getInfo() {
        return `Название: ${this.name}, Размер: ${this.size}, Цена: ${this.price}руб.`;
    }
}

export default Drink;