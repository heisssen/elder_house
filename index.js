document.addEventListener('DOMContentLoaded', function () {
    // Слайдер отзывов
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) slide.classList.add('active');
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);

    if (nextButton) nextButton.addEventListener('click', nextSlide);
    if (prevButton) prevButton.addEventListener('click', prevSlide);

    // Функция для управления FAQ
    window.toggleFAQ = function (index) {
        const faqElement = document.getElementById(`faq${index}`);
        if (faqElement) {
            faqElement.classList.toggle('hidden');
        }
    };
});

// Мобильное меню навбара
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');

    if (navToggle && navMenu && navClose) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });

        navClose.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    }

    // Изменение цвета навбара при прокрутке
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

