// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Function to apply the saved theme on page load
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        body.classList.remove('dark-theme');
        themeToggle.textContent = 'Toggle Dark Mode';
    }
};

// Event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Toggle Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Toggle Dark Mode';
    }
});

// Apply the saved theme when the script loads
applySavedTheme();

// Slider functionality for Projects section
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-btn.prev');
const nextBtn = document.querySelector('.slide-btn.next');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Optional: Auto-slide every 6 seconds
// setInterval(() => {
//     nextBtn.click();
// }, 6000);

showSlide(currentSlide);
