import './homework-4.js';
import './homework-5.js'; 
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';
import './products.js';
import './script.js';  
import './structure.js';
import { Homework4 } from './homework-4.js'; 
import { Modal } from './modal.js';
import { Form } from './form.js';

// Инициализация
const contactModal = new Modal('myModal');
const contactForm = new Form('myForm');

const openBtn = document.getElementById('openBtn');

if (openBtn) {
    openBtn.onclick = () => contactModal.open();
}

if (contactForm.form) {
    contactForm.form.onsubmit = (e) => {
        e.preventDefault();
        if (contactForm.isValid()) {
            console.log("Данные:", contactForm.getValues());
            alert("Успех!");
            contactForm.reset();
            contactModal.close();
        } else {
            alert("Ошибка валидации");
        }
    };
}