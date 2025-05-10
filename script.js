const menuIcon = document.querySelector('#menu-icons');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active'); // Toggle the 'show' class on the nav-links element
};
