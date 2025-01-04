document.addEventListener('DOMContentLoaded', () => {
  const heroImage = document.querySelector('.hero-image');
  const iphoneContainer = document.querySelector('.iphone-container');

  window.addEventListener('scroll', () => {
    // Berechne Scroll-Progress (0 bis 1)
    const scrollProgress = Math.min(window.scrollY / window.innerHeight, 1);

    // Hero-Bild Animation
    const scale = 1 - (scrollProgress * 0.7); // Von 100% auf 30% skalieren
    heroImage.style.transform = `scale(${scale})`;
    heroImage.style.opacity = 1 - scrollProgress;

    // iPhone Animation
    iphoneContainer.style.opacity = scrollProgress;
  });
});