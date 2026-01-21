let user = null;

const subscribeForm = document.getElementById('subscribeForm');

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailInput = subscribeForm.querySelector('input[type="email"]');
    const emailValue = emailInput.value.trim();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailValue) {
        alert("Поле email не заполнено!");
        return;
    }
    
    if (!emailPattern.test(emailValue)) {
        alert("Введите корректный email адрес!");
        return; 
    }

    console.log({ email: emailValue });
    
    subscribeForm.reset();
});

const modal = document.getElementById('registrationModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');
const registrationForm = document.getElementById('registrationForm');

const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

openModalBtn.addEventListener('click', () => {
    modal.classList.add('modal-showed');
    overlay.style.display = 'block'; 
});

const closeModal = () => {
    modal.classList.remove('modal-showed');
    overlay.style.display = 'none';
    registrationForm.reset();
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); 

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

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

    delete userData.confirmPassword;

    userData.createdOn = new Date();

    user = userData;

    console.log('Успешная регистрация:', user);

    closeModal();
});