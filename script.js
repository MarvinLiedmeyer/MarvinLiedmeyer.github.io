const morphElement = document.querySelector('.morph-element');
const iphoneFrame = document.querySelector('.iphone-frame');

// Finale Dimensionen des iPhone-Screens
const FINAL_WIDTH = 350;  // iPhone Screen Breite
const FINAL_HEIGHT = 760; // iPhone Screen Höhe

window.addEventListener('scroll', () => {
  const scrollProgress = window.scrollY / (window.innerHeight * 2);
  const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

  if (scrollProgress <= 1) {
    // Erste Animationsphase (0-100vh): Bild schrumpft zur Mitte
    const scale = 1 - (clampedProgress * 0.6); // Schrumpft auf 40%
    const borderRadius = clampedProgress * 40; // Rundet die Ecken ab

    // Berechne die aktuelle Größe
    const currentWidth = window.innerWidth - (clampedProgress * (window.innerWidth - FINAL_WIDTH));
    const currentHeight = window.innerHeight - (clampedProgress * (window.innerHeight - FINAL_HEIGHT));

    morphElement.style.transform = `translate(-50%, -50%) scale(${scale})`;
    morphElement.style.borderRadius = `${borderRadius}px`;
    morphElement.style.width = `${currentWidth}px`;
    morphElement.style.height = `${currentHeight}px`;
    morphElement.style.left = '50%';
    morphElement.style.top = '50%';

    // iPhone Frame einblenden
    iphoneFrame.style.opacity = clampedProgress;
  }
});