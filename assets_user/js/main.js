const menuBtn = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        sidebar.classList.add('shown');
        content.style.filter = "brightness(40%)";
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('shown');
        content.style.filter = "brightness(100%)";
        menuOpen = false;
    }
});

document.addEventListener('click', function (event) {
    var isClickInside = sidebar.contains(event.target) || menuBtn.contains(event.target);

    if (!isClickInside) {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('shown');
        content.style.filter = "brightness(100%)";
        menuOpen = false;
    }
});

