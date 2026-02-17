const images = document.querySelectorAll(".gallery__item img");
let imgSrc;

// Получаем src изображения при клике и открываем модальное окно
images.forEach((img) => {
    img.addEventListener("click", (e) => {
        imgSrc = e.target.src;
        // Вызываем функцию создания модального окна
        createModal(imgSrc);
    });
});

// Функция создания модального окна
const createModal = (src) => {
    // Проверяем, существует ли уже модальное окно
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove(); // Удаляем старое окно
    }

    const modal = document.createElement("div");
    modal.classList.add("modal");
    
    // Добавляем модальное окно в body
    document.body.append(modal);
    
    // Создаем изображение
    const newImage = document.createElement("img");
    newImage.src = src;
    newImage.classList.add("modal__image");
    
    // Создаем кнопку закрытия
    const closeBtn = document.createElement("button");
    closeBtn.classList.add("closeBtn");
    closeBtn.innerHTML = "  ×  ";
    
    // Добавляем обработчик закрытия
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.onclick = () => {
        modal.remove();
    };
    
    // Добавляем элементы в модальное окно
    modal.append(newImage, closeBtn);
};
