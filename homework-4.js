export class Homework4 {
    constructor() {
        this.greenColorHash = '#00ff00';
        this.blueColorHash = '#0000FF';
        this.init();
    }

    init() {
        const homeworkCards = document.querySelectorAll('.card-container');
        const hwChangeColorAllButton = document.querySelector('#change-color-all-card-button');

        if (hwChangeColorAllButton) {
            hwChangeColorAllButton.addEventListener('click', () => {
                homeworkCards.forEach((card) => card.style.backgroundColor = this.greenColorHash);
            });
        }

        const firstProductCard = document.querySelector('.card-container');
        const changeColorFirstCardButton = document.querySelector('#change-color-first-card-button');

        if (changeColorFirstCardButton && firstProductCard) {
            changeColorFirstCardButton.addEventListener('click', () => {
                firstProductCard.style.backgroundColor = this.blueColorHash;
            });
        }

        const openGoogleButton = document.querySelector('#open-google');
        if (openGoogleButton) {
            openGoogleButton.addEventListener('click', () => this.openGoogle());
        }

        const toggleButton = document.getElementById('color-toggle-button');
        if (toggleButton) {
            toggleButton.classList.add('btn-style', 'text-white', 'bg-blue');
            toggleButton.addEventListener('click', function() {
                this.classList.toggle('bg-blue');
                this.classList.toggle('bg-red');
            });
        }
    }

    openGoogle() {
        const answer = confirm('Вы действительно хотите открыть Google?');
        if (answer) {
            window.open('https://google.com');
        }
    }
}