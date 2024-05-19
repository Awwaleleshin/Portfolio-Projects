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
const tabs = document.querySelectorAll('.tabs-wrap ul li');
const all = document.querySelectorAll('.item-wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display = 'none'
        })

        if (tabval == 'food') {
            foods.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'snack') {
            snacks.forEach(item => {
                item.style.display = 'block'
            })
        }
        else if (tabval == 'beverage') {
            beverages.forEach(item => {
                item.style.display = 'block'
            })
        }
        else (
            all.forEach(item => {
                item.style.display = 'block'
            })
        )
    })
});