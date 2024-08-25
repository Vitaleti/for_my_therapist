const contentItems = document.querySelectorAll('.content-item');
const blueFilter = document.getElementById('blue-filter');
const notebookLine = document.getElementById('notebook-line');
const notebookText = notebookLine.querySelector('.notebook-text');
const closeCard = document.getElementById('close-card');

// Объект, который сопоставляет id карточек с текстом
const textMap = {
    '1': 'You are so beautiful when you wake up.',
    '2': 'I really like your eyes.',
    '3': 'You are very kind',
    '4': 'My bro, hahaah',
    '5': 'You are very cool.',
    '6': 'I want to hold your hand',
    '7': 'My kitty.',
    '8': 'My dream',
    '9': 'I love you.'
};

contentItems.forEach(item => {
    item.addEventListener('click', () => {
        // Получаем id нажатой карточки
        const itemId = item.id;

        // Устанавливаем текст в зависимости от id карточки
        if (textMap[itemId]) {
            notebookText.textContent = textMap[itemId];
        }

        // Меняем классы у blueFilter, notebookLine и closeCard
        blueFilter.classList.remove('visually-hidden');
        blueFilter.classList.add('blur-effect');

        notebookLine.classList.remove('visually-hidden');
        notebookLine.classList.add('notebook-line-wrapper');

        closeCard.classList.remove('visually-hidden');
        closeCard.classList.add('close-card-button-wrapper')
    });
});

closeCard.addEventListener('click', () => {
    // Скрываем фильтр и блок с текстом
    blueFilter.classList.add('visually-hidden');
    blueFilter.classList.remove('blur-effect');

    notebookLine.classList.add('visually-hidden');
    notebookLine.classList.remove('notebook-line-wrapper');

    closeCard.classList.add('visually-hidden')
    closeCard.classList.remove('close-card-button-wrapper');
});