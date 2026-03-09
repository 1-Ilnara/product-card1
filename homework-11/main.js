import Cafe from './Cafe.js';
import Coffee from './Coffee.js';
import Tea from './Tea.js';
import Lemonade from './Lemonade.js';

const myCafe = new Cafe('Sweet Cup', 'Москва, ул. Пушкина 15');
const latte = new Coffee('Латте', 'Большой', 250, 'Арабика', 'Овсяное');
const greenTea = new Tea('Зелёный чай', 'Средний', 150, 'Сенча');
const strawberryLemonade = new Lemonade('Лимонад', 'Маленький', 130, 'Клубничный');

console.log('--- ИНФОРМАЦИЯ О ЗАВЕДЕНИИ ---');
myCafe.getInfo();

console.log('\n--- ЗАКАЗ №1 (КОФЕ) ---');
myCafe.orderDrink(latte);

console.log('\n------------------');

console.log('--- ЗАКАЗ №2 (ЧАЙ) ---');
myCafe.orderDrink(greenTea);

console.log('\n------------------');

console.log('--- ЗАКАЗ №3 (ЛИМОНАД) ---');
myCafe.orderDrink(strawberryLemonade);

 