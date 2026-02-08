let user = null;

const signupForm = document.getElementById('user-signup-form');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(signupForm);
    const emailValue = formData.get('email');
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailValue || !emailValue.trim()) {
        alert("Поле email не заполнено!");
        return;
    }
    
    if (!emailPattern.test(emailValue.trim())) {
        alert("Введите корректный email адрес!");
        return; 
    }

    console.log({ email: emailValue.trim() });
    
    signupForm.reset();
});

const modal = document.getElementById('registration-modal');
const modalOpenBtn = document.getElementById('open-modal');
const modalCloseBtn = document.querySelector('.close');
const registrationForm = document.getElementById('registration-form');
const overlay = document.getElementById('overlay');


modalOpenBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
    overlay.style.display = 'block'; 
});

const closeModal = () => {
    modal.classList.remove('modal-showed');
    overlay.style.display = 'none';
    registrationForm.reset();
};

modalCloseBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); 

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Регистрация отклонена: пароли не совпадают!');
        return;
    }

    if (!registrationForm.checkValidity()) {
        alert('Регистрация отклонена: форма заполнена неверно!');
        return;
    }

    const formData = new FormData(registrationForm);
    const userData = Object.fromEntries(formData.entries());

    delete userData['confirm-password'];

    userData.createdOn = new Date();

    user = userData;

    console.log('Успешная регистрация:', user);

    closeModal();
});