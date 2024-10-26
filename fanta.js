const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const heroImage = document.querySelector('.hero-image');
    const button = document.querySelector('.cta-button');

    // Subtle float animation for image
    setInterval(() => {
        heroImage.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            heroImage.style.transform = 'translateY(0)';
        }, 1000);
    }, 2000);

    // Button click effect
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        this.appendChild(ripple);
        
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => {
            ripple.remove();
        }, 300);
    });
});