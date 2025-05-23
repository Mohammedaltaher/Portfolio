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

// Theme toggle functionality with improved UI
const themeToggle = document.getElementById('theme-toggle');
const themeToggleLight = document.getElementById('theme-toggle-light');
const body = document.body;

// Function to apply the saved theme on page load
const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.style.display = 'none';
        themeToggleLight.style.display = 'inline-block';
    } else {
        body.classList.remove('dark-theme');
        themeToggle.style.display = 'inline-block';
        themeToggleLight.style.display = 'none';
    }
};

// Event listeners for the theme toggle buttons
if (themeToggle && themeToggleLight) {
    themeToggle.addEventListener('click', () => {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        themeToggle.style.display = 'none';
        themeToggleLight.style.display = 'inline-block';
    });
    themeToggleLight.addEventListener('click', () => {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.style.display = 'inline-block';
        themeToggleLight.style.display = 'none';
    });
}

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
