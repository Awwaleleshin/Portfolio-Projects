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

// Swiper JS
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        // when window width is >= 320px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 3,
        }
      }
  });

//   Dark light theme
const html = document.querySelector('html');
const themeBtn = document.getElementById('theme-toogle');

function darkMode () {
    html.classList.add('dark');
    themeBtn.classList.replace('ri-moon-line', 'ri-sun-line');
    localStorage.setItem('mode', 'dark');
}

function lightMode () {
    html.classList.remove('dark');
    themeBtn.classList.replace('ri-sun-line', 'ri-moon-line');
    localStorage.setItem('mode', 'light');
}

if (localStorage.getItem('mode') == 'dark') {
    darkMode();
}   else {
    lightMode()
}

themeBtn.addEventListener('click', (e) => {
    if (localStorage.getItem('mode')  == 'light') {
        darkMode();
    } else {
        lightMode()
    }
})

// Scroll section active link
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = 'home';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (this.scrollY >= sectionTop - 60) {
            current = section.getAttribute('id')
        }
    });

    navLinks.forEach((item) => {
        item.classList.remove('text-secondaryColor');
        if(item.href.includes(current)) {
            item.classList.add('text-secondaryColor');
        }
    });
};

window.addEventListener('scroll', activeLink)

// Copyright year
const currentYear = document.querySelector('#current-year');
const updatedDate = new Date();
currentYear.innerText = updatedDate.getFullYear()
