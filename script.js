

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "flex") {
        navbar.style.maxHeight = "0";
        navbar.style.opacity = "0";
        setTimeout(() => {
            navbar.style.display = "none";
        }, 500); // Adjust to match the CSS transition duration
    } else {
        navbar.style.display = "flex";
        setTimeout(() => {
            navbar.style.maxHeight = "500px"; // Adjust according to your needs
            navbar.style.opacity = "1";
        }, 10); // Short delay to ensure the transition is applied
    }
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");
    var themeIcon = document.querySelector('.theme-icon i');
    if (body.classList.contains("dark-theme")) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// slider
let currentIndex = 0;
const slides = document.querySelectorAll('#slider .slide');

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 5000);

// animation for img
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.info-image');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 
    });

    images.forEach(image => {
        observer.observe(image);
    });
});


// clint section

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }

    slides[currentIndex].classList.add('active'); 
    setInterval(showNextSlide, 5000); 
});

// whatsapp
window.addEventListener('scroll', function() {
    const whatsappButton = document.getElementById('whatsappButton');
    if (window.scrollY > 50) {
        whatsappButton.style.display = 'block';
    } else {
        whatsappButton.style.display = 'none';
    }
});