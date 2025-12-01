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
{
    
    toggleButton.classList.add('btn-style');
    
    toggleButton.classList.add('color-one');

    toggleButton.addEventListener('click', function() {
        
        this.classList.toggle('color-one');
        this.classList.toggle('color-two');
    });

}

const mainTitleButton = document.getElementById('main-title-button');
const mainTitleElement = document.querySelector('.main-title');

if (mainTitleButton && mainTitleElement) {
    mainTitleButton.addEventListener('click', () => {
    console.log(mainTitleElement.textContent);
    });
}