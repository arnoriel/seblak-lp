// Burger Menu Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after click
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// FIX: Inisialisasi Leaflet setelah window load untuk memastikan container sized properly, hindari offside sampai touch
window.addEventListener('load', () => {
    var map = L.map('map').setView([-6.9175, 107.6191], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-6.9175, 107.6191]).addTo(map)
        .bindPopup('<b>Warung Seblak Bu Imah</b><br>Jl. Raya Bandung No. 123')
        .openPopup();

    // FIX: Delay kecil untuk invalidateSize agar viewport mobile stabilize
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
});

// FIX: Handle resize window (misal rotate device) untuk re-invalidate
window.addEventListener('resize', () => {
    if (typeof map !== 'undefined') {
        map.invalidateSize();
    }
});

// Carousel for Gallery
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
    const inner = carousel.querySelector('.carousel-inner');
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');
    const images = inner.querySelectorAll('img');
    let index = 0;

    function showSlide(n) {
        index = (n + images.length) % images.length;
        inner.style.transform = `translateX(-${index * 100}%)`;
    }

    prev.addEventListener('click', () => showSlide(index - 1));
    next.addEventListener('click', () => showSlide(index + 1));

    // Auto slide
    setInterval(() => showSlide(index + 1), 3000);
});

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// Update Smooth Scroll for external links (no preventDefault for external)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close mobile menu
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Map init for contact-us (same as before)
window.addEventListener('load', () => {
    if (document.getElementById('map')) {
        var map = L.map('map').setView([-6.9175, 107.6191], 14);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([-6.9175, 107.6191]).addTo(map)
            .bindPopup('<b>Warung Seblak Bu Imah</b><br>Jl. Raya Bandung No. 123')
            .openPopup();
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }
});