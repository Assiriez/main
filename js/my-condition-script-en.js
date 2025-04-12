// 1. Находим кнопку по ее классу.
const button = document.querySelector('.works__btn');

// 2. Находим (или создаем и добавляем) первый абзац и присваиваем ему id.
let paragraph1 = document.getElementById('dynamicParagraph1');
if (!paragraph1) {
    paragraph1 = document.createElement('p');
    paragraph1.textContent = 'To layout your website, I need a website design made in Figma.';
    paragraph1.id = 'dynamicParagraph1'; // Присваиваем id первому абзацу
    const container = document.getElementById('container'); // Находим контейнер
    if (container) {
        container.appendChild(paragraph1);
    } else {
        document.body.appendChild(paragraph1);
    }
    paragraph1.style.display = 'none'; // Изначально скрываем первый абзац
}

// 3. Находим (или создаем и добавляем) второй абзац и присваиваем ему id.
let paragraph2 = document.getElementById('dynamicParagraph2');
if (!paragraph2) {
    paragraph2 = document.createElement('p');
    paragraph2.textContent = 'To discuss other issues, write to me by e-mail or on Telegram (icon in the lower right corner of the site)';
    paragraph2.id = 'dynamicParagraph2'; // Присваиваем id второму абзацу
    const container = document.getElementById('container'); // Находим контейнер
    if (container) {
        container.appendChild(paragraph2);
    } else {
        document.body.appendChild(paragraph2);
    }
    paragraph2.style.display = 'none'; // Изначально скрываем второй абзац
}

// 4. Добавляем обработчик события на кнопку.
button.addEventListener('click', () => {
    // 5. Проверяем, скрыт ли первый абзац. Состояние второго должно быть таким же.
    const isHidden = paragraph1.style.display === 'none';

    // 6. Изменяем видимость обоих абзацев.
    paragraph1.style.display = isHidden ? 'block' : 'none';
    paragraph2.style.display = isHidden ? 'block' : 'none';
});