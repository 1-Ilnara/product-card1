const productCard = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-card-button');
const greenColorHash = '#00ff00'
const blueColorHash = '#0000FF'
 

 
changeColorAllCardButton.addEventListener('click',() => {
productCard.forEach((card) => card.style.backgroundColor = greenColorHash)
})

console.log('ProductCard', productCard)
console.log('Button', changeColorAllCardButton)

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click',() => {
firstProductCard.style.backgroundColor = blueColorHash;
})

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click',openGoogle)
function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open('https://google.com')
    } else {
        return;
    }
}

const toggleButton = document.getElementById('color-toggle-button');

toggleButton.classList.add('btn-style', 'text-white', 'bg-blue');

toggleButton.addEventListener('click', function() {
    this.classList.toggle('bg-blue');
    this.classList.toggle('bg-red');
});

const mainTitleButton = document.getElementById('main-title-button');
const mainTitleElement = document.querySelector('.main-title');

if (mainTitleButton && mainTitleElement) {
    mainTitleButton.addEventListener('click', () => {
        console.log(mainTitleElement.textContent);
    });



}function logTemperature(city, temperature) {
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
  const message =`Добро пожаловать, ${userFirstName} ${userLastName}, возраст: ${userAge}`;   
  console.log(`\n---Приветственное сообщение---`);
  console.log(message); 
}

generateWelcomeMessage();