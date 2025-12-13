// Toggle mobile menu
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Change icon to 'X'
    navbar.classList.toggle('active'); // Show/hide the menu
};


// Scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // Remove 'active' from all links
            navLinks.forEach(links => {
                links.classList.remove('active');
            });

            // Add 'active' to the link corresponding to the current section
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        };
    });

    // Remove toggle icon and navbar when clicking a link (mobile view)
    if (menuIcon.classList.contains('fa-xmark')) {
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    }
};

