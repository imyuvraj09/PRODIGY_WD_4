// scripts.js

// Toggle navigation menu for smaller screens
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Smooth scrolling for anchor links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjust this value if you have a fixed header
            behavior: 'smooth'
        });

        // Close the navigation menu on mobile after clicking a link
        navList.classList.remove('show');
    });
});
