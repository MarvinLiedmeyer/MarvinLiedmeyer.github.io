const hero = document.getElementById('hero');
const iphoneFrame = document.getElementById('iphoneFrame');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
        hero.style.opacity = 0;
        iphoneFrame.classList.add('shrink');
    } else {
        hero.style.opacity = 1;
        iphoneFrame.classList.remove('shrink');
    }
});
