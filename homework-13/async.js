const statusEl = document.getElementById('status');
const container = document.getElementById('container');
const getAllBtn = document.getElementById('getAllBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');

function renderUsers(users) {
    container.innerHTML = '';
    if (!users || users.length === 0) {
        statusEl.textContent = 'Список пользователей пуст';
        return;
    }
    statusEl.textContent = '';
    
    users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${user.name} ${user.surname}</h3>
            <p><b>Возраст:</b> ${user.age}</p>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Город:</b> ${user.city}</p>
            <p><b>Тел:</b> ${user.phone}</p>
            <button class="delete-btn" onclick="deleteUser(${user.id})">Удалить</button>
        `;
        container.appendChild(card);
    });
}

async function loadData() {
    const localData = localStorage.getItem('users_db');

    if (localData) {
        renderUsers(JSON.parse(localData));
    } else {
        try {
            statusEl.textContent = 'Данные загружаются...';
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            const response = await fetch('users.json');
            if (!response.ok) throw new Error('Файл не найден');
            
            const data = await response.json();
            localStorage.setItem('users_db', JSON.stringify(data.users));
            renderUsers(data.users);
        } catch (error) {
            statusEl.innerHTML = '<span style="color:red">Ошибка при загрузке данных</span>';
            console.error(error);
        }
    }
}

window.deleteUser = (id) => {
    const users = JSON.parse(localStorage.getItem('users_db') || '[]');
    const filtered = users.filter(user => user.id !== id);
    localStorage.setItem('users_db', JSON.stringify(filtered));
    renderUsers(filtered);
};

deleteAllBtn.onclick = () => {
    localStorage.setItem('users_db', JSON.stringify([]));
    renderUsers([]);
};

getAllBtn.onclick = async () => {
    const localData = JSON.parse(localStorage.getItem('users_db') || '[]');
    
    if (localData.length > 0) {
        alert('Данные уже загружены!');
    } else {
        localStorage.removeItem('users_db'); 
        loadData();
    }
};

loadData();