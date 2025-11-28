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

const openGoogleButton = document.querySelector('#openGoogle');
openGoogleButton.addEventListener('click',openGoogle)
function openGoogle() {
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open('https://google.com')
    }else{
        return;
    }
}

const mainTitle = document.querySelector('.main-title');
mainTitle.addEventListener('mouseenter', function() {

});
const content = mainTitle.textContent;
console.log(content);

const button = document.getElementById('colorToggleButton');


const colorOneRGB = 'rgb(52, 152, 219)';
const colorTwoRGB = 'rgb(231, 76, 60)'; 

button.style.backgroundColor = colorOneRGB;

button.addEventListener('click', function() {
    
    if (button.style.backgroundColor === colorOneRGB) {
        button.style.backgroundColor = colorTwoRGB;
    } else {
        button.style.backgroundColor = colorOneRGB;
    }
});