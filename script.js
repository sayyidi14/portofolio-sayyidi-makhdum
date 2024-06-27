let Text = document.getElementById('text');
let moon = document.getElementById('moon');
let bird = document.getElementById('bird');
let cave = document.getElementById('caveup');
let star = document.getElementById('star');
let cahaya = document.getElementById('cahaya');
let star_last = document.getElementById('star-last');
let moon_last = document.getElementById('moon-last');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    Text.style.marginTop = value * 1 + 'px';
    moon.style.marginTop = value * 0.5 + 'px';
    bird.style.left = value * -0.5 + 'px';
    star.style.left = value * 0.5 + 'px';
    cave.style.top = value * -0.5 + 'px';

    let opacityValue = value / 1000; // Example calculation
    if (opacityValue > 1) opacityValue = 1; // Cap the opacity at 1
    cahaya.style.opacity = opacityValue;
});
