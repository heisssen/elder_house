// Логіка слайдера Testimonials
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

// Показ поточного слайда
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Перемикання до наступного слайду
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Перемикання до попереднього слайду
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Події для індикаторів
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Події для кнопок навігації
document.getElementById('prevSlide').addEventListener('click', prevSlide);
document.getElementById('nextSlide').addEventListener('click', nextSlide);

// Автоматичне перемикання слайдів кожні 7 секунд
setInterval(nextSlide, 7000);

// Модальне вікно для відео
const videoModal = document.getElementById("videoModal");
const openModalButton = document.getElementById("openVideoModal");
const closeModalButton = document.getElementById("closeVideoModal");

openModalButton.addEventListener("click", () => {
    videoModal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
    videoModal.style.display = "none";
});

// Логіка для FAQ секції
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const answer = item.querySelector('.faq-answer');
        answer.classList.toggle('show');

        // Закриваємо інші питання, якщо відкривається нове
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.querySelector('.faq-answer').classList.remove('show');
            }
        });
    });
});
