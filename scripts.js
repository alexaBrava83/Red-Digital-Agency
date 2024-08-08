/* scripts.js */
document.addEventListener("DOMContentLoaded", function() {
    const scrollToContactBtn = document.getElementById("scrollToContactBtn");

    scrollToContactBtn.addEventListener("click", function() {
        const contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.opacity = '1';
        header.classList.add('scrolled');
    } else {
        scrollToTopBtn.style.opacity = '0';
        setTimeout(() => {
            scrollToTopBtn.style.display = 'none';
        }, 300);
        header.classList.remove('scrolled');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

