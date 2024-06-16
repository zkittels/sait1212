document.getElementById('topicForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const newTopic = document.createElement('li');
    newTopic.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <div class="likes-dislikes">
            <button class="like-button">👍 <span class="like-count">0</span></button>
            <button class="dislike-button">👎 <span class="dislike-count">0</span></button>
        </div>
    `;

    document.getElementById('topics').appendChild(newTopic);

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    
    // Add event listeners for like and dislike buttons
    newTopic.querySelector('.like-button').addEventListener('click', function() {
        const likeCountSpan = this.querySelector('.like-count');
        likeCountSpan.textContent = parseInt(likeCountSpan.textContent) + 1;
    });

    newTopic.querySelector('.dislike-button').addEventListener('click', function() {
        const dislikeCountSpan = this.querySelector('.dislike-count');
        dislikeCountSpan.textContent = parseInt(dislikeCountSpan.textContent) + 1;
    });
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log(`Имя пользователя: ${username}, Email: ${email}, Пароль: ${password}`);

    alert('Регистрация успешна!');
    document.getElementById('registerForm').reset();
});

function initMap() {
    const salonLocation = { lat: 55.7558, lng: 37.6176 }; // Координаты Москвы
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: salonLocation
    });
    const marker = new google.maps.Marker({
        position: salonLocation,
        map: map
    });
}

// Загрузка карты после загрузки страницы
window.onload = function() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao&libraries=places&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);
};