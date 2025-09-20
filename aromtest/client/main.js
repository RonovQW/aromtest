const perfumes = [
    {
        name: "Louis Vuitton Ombre Nomade",
        brand: "Louis Vuitton",
        price: "2 000 ₽",
        stock: 5,
        notes: "Герань, янтарь, шафран",
        description: "Восточно-древесный унисекс-аромат, композиция из герани, янтаря и шафрана.",
        image: "https://placehold.co/300x400/333333/FFFFFF?text=Ombre+Nomade",
        volume: "30ml"
    },
    {
        name: "Louis Vuitton L’Immensité",
        brand: "Louis Vuitton",
        price: "2 000 ₽",
        stock: 1,
        notes: "Грейпфрут, имбирь, бергамот",
        description: "Восточно-пряный мужской аромат, верхние нотки: грейпфрут, имбирь, бергамот.",
        image: "https://placehold.co/300x400/333333/FFFFFF?text=L%27Immensit%C3%A9",
        volume: "30ml"
    },
    {
        name: "Sospiro Accento",
        brand: "Sospiro",
        price: "1 700 ₽",
        stock: 0,
        notes: "Древесные, цветочные, фруктовые",
        description: "Древесный ориентальный, с вкраплениями свежих, цветочно-фруктовых оттенков.",
        image: "https://placehold.co/300x400/333333/FFFFFF?text=Accento",
        volume: "30ml"
    },
    {
        name: "Nasomatto Black Afgano",
        brand: "Nasomatto",
        price: "1 700 ₽",
        stock: 1,
        notes: "Удовая древесина, кожа, кофе",
        description: "Композиция: удовая древесина, кожа, крепкий кофе.",
        image: "https://placehold.co/300x400/333333/FFFFFF?text=Black+Afgano",
        volume: "30ml"
    },
    {
        name: "Hermes Terre d'Hermes",
        brand: "Hermes",
        price: "2 300 ₽",
        stock: 1,
        notes: "Грейпфрут, минералы, апельсин, роза, атласский кедр, перец, герань",
        description: "Раскрывается ароматами грейпфрута, минералов и апельсина. Роза, атласский кедр, перец и герань в «сердце» аромата.",
        image: "https://placehold.co/300x400/333333/FFFFFF?text=Terre+d%27Hermes",
        volume: "30ml"
    },
    {
        name: "Ajmal Amber Wood",
        brand: "Ajmal",
        price: "1 700 ₽",
        stock: 3,
        notes: "Яблоко, перечная мята, кардамон, лаванда, кедр, ирис",
        description: "Древесные оттенки, яблочные ноты, перец, кардамон, лаванда, кедр, корень ириса.",
        image: "https://placehold.co/300x400/333333/FFFFFF?text=Amber+Wood",
        volume: "30ml"
    }
];

// Модальное окно
function showModal(perfume) {
    document.getElementById('modal-title').textContent = perfume.name;
    document.getElementById('modal-brand').textContent = perfume.brand;
    document.getElementById('modal-notes').textContent = "Ноты: " + perfume.notes;
    document.getElementById('modal-description').textContent = perfume.description;
    document.getElementById('modal-price').textContent = "Цена: " + perfume.price + " / " + perfume.volume;
    document.getElementById('modal-stock').textContent = perfume.stock > 0 ? "В наличии: " + perfume.stock + " шт" : "Нет в наличии";
    document.getElementById('modal').style.display = 'block';
}

// Навешиваем обработчики на кнопки "Подробнее"
document.querySelectorAll('.perfume-card').forEach((card, idx) => {
    const btn = card.querySelector('.details-btn');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (card.classList.contains('out-of-stock')) return;
            showModal(perfumes[idx]);
        });
    }
    // Можно добавить обработчик на всю карточку, если нужно
    card.addEventListener('click', function(e) {
        if (card.classList.contains('out-of-stock')) return;
        // Если клик по кнопке, не открывать второй раз
        if (e.target.classList.contains('details-btn')) return;
        showModal(perfumes[idx]);
    });
});

// Закрытие модального окна
document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};

function showSection(sectionId) {
    document.querySelectorAll('main > section').forEach(sec => {
        sec.style.display = 'none';
    });
    const section = document.getElementById(sectionId);
    if (section) section.style.display = 'block';
}

// Переключение вкладок
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
        if (link.textContent === 'Главная') showSection('home');
        if (link.textContent === 'Каталог') showSection('catalog');
        if (link.textContent === 'Корзина') showSection('cart');
        if (link.textContent === 'О нас') showSection('about');
    });
});

// При загрузке показываем каталог
showSection('catalog');