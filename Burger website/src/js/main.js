// Main menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
});

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden')
});

navLink.forEach(link =>
    link.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    })
);

// Tabs
const tabs = document.querySelectorAll('.tabs-wrap ul li')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})