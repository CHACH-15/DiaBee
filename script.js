const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('#navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the active class
    menuBtn.classList.toggle('fa-times'); // Change the icon (bars to X)
});
