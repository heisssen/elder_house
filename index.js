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

document.addEventListener("DOMContentLoaded", function () {
    // Получаем элементы навигации
    const navbarToggler = document.querySelector(".navbar-toggler");
    const offcanvasNavbar = document.querySelector("#offcanvasNavbar");
    const offcanvasCloseBtn = offcanvasNavbar.querySelector(".btn-close");
    const navLinks = offcanvasNavbar.querySelectorAll(".nav-link");

    // Функция для открытия и закрытия Offcanvas меню
    function toggleOffcanvas() {
        offcanvasNavbar.classList.toggle("show");
        document.body.classList.toggle("offcanvas-open");
    }

    // Переключение Offcanvas меню по нажатию на кнопку
    navbarToggler.addEventListener("click", function () {
        toggleOffcanvas();
    });

    // Закрытие Offcanvas меню по нажатию на кнопку закрытия
    offcanvasCloseBtn.addEventListener("click", function () {
        toggleOffcanvas();
    });

    // Закрытие Offcanvas меню при клике на любую из ссылок
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            toggleOffcanvas();
        });
    });

    // Закрытие Offcanvas при клике вне меню
    document.addEventListener("click", function (event) {
        if (!offcanvasNavbar.contains(event.target) && !navbarToggler.contains(event.target)) {
            if (offcanvasNavbar.classList.contains("show")) {
                toggleOffcanvas();
            }
        }
    });
});


