import './homework-5.js'; 
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './products.js';
import './script.js';  
import './Creatures.js';
import { Modal } from './modal.js';
import { Form } from './form.js';

const handleSubmit = (e) => {
    if (contactForm.isValid()) {
        console.log("Данные:", contactForm.getValues());
        alert("Успех!");
        contactForm.reset();
        contactModal.close();
    } else {
        alert("Ошибка валидации");
    }
};

const contactModal = new Modal('myModal');
const contactForm = new Form('myForm', handleSubmit); 
const openBtn = document.getElementById('openBtn');

const handleOpen = () => contactModal.open();

if (openBtn) {
    openBtn.addEventListener('click', handleOpen);
}

