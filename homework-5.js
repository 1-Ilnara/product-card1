function logTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

logTemperature("Москва", 20);
logTemperature("Уральск", 15);

const SPEED_OF_SOUND = 343; 

function checkSpeed(speed) {
    if (speed > SPEED_OF_SOUND) {
        console.log("Сверхзвуковая скорость");
    } else if (speed < SPEED_OF_SOUND) {
        console.log("Дозвуковая скорость");
    } else {
        console.log("Скорость звука");
    }
}

console.log(`Скорость звука: ${SPEED_OF_SOUND} м/с`);


const productName = "Ноутбук ASUS";
const productPrice = 75000; 

function attemptToPurchase(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - currentBudget;
    console.log(`Вам не хватает ${difference} ₽, пополните баланс`);
  }
}

console.log("Попытка 1 (Бюджет 100000):");
attemptToPurchase(100000); 

console.log("\nПопытка 2 (Бюджет 50000):");
attemptToPurchase(50000);  

console.log("\nПопытка 3 (Бюджет ровно 75000):");
attemptToPurchase(75000);  


const userFirstName = "Ilnara";
const userLastName = "Khairulina";
let userAge = 35; 



function generateWelcomeMessage() { 
  const message = `Добро пожаловать, ${userFirstName} ${userLastName}, возраст: ${userAge}`;   
  console.log(`\n---Приветственное сообщение---`);
  console.log(message); 
}

generateWelcomeMessage();