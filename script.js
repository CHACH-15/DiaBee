const menuBtn = document.querySelector('#menu-btn');


menuBtn.addEventListener('click', () => {
    document.querySelector(".navbar").classList.toggle("active") // Change the icon (bars to X)
});
