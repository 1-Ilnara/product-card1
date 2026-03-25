const statusEl = document.getElementById('status');
const container = document.getElementById('container');
const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const STORAGE_KEY = 'users-db';

function renderUsers(users) {
    const template = document.getElementById('user-template');
    container.innerHTML = ''; 

    if (!users || users.length === 0) {
        statusEl.textContent = 'Список пользователей пуст';
        return;
    }
    
    statusEl.textContent = '';

    users.forEach(user => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('.user-full-name').textContent = `${user.name} ${user.surname}`;
        clone.querySelector('.user-age').textContent = user.age;
        clone.querySelector('.user-email').textContent = user.email;
        clone.querySelector('.user-city').textContent = user.city;
        clone.querySelector('.user-phone').textContent = user.phone;

        const deleteBtn = clone.querySelector('.delete-card-btn');
        deleteBtn.addEventListener('click', () => {
            const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            const filtered = storageData.filter(u => u.id !== user.id);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
            renderUsers(filtered);
        });

        container.appendChild(clone);
    });
}

async function loadData() {
    const storageData = localStorage.getItem(STORAGE_KEY);

    if (storageData) {
        renderUsers(JSON.parse(storageData));
    } else {
        try {
            statusEl.textContent = 'Данные загружаются...';
            
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const response = await fetch('users.json');
            
            if (!response.ok) throw new Error('Файл базы данных не найден');
            
            const data = await response.json();
            
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.users));
            renderUsers(data.users);
        } catch (error) {
            statusEl.textContent = 'Ошибка при загрузке данных';
            statusEl.classList.add('error');
            console.error(error);
        }
    }
}

getAllBtn.addEventListener('click', () => {
    const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    
    if (storageData.length > 0) {
        alert('Инфо: Данные уже загружены и отображены!');
    } else {
        localStorage.removeItem(STORAGE_KEY); 
        loadData();
    }
});

deleteAllBtn.addEventListener('click', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    renderUsers([]);
});

loadData();