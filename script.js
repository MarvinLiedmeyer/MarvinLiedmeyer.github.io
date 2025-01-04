// Finale Dimensionen des iPhone-Screens
const FINAL_WIDTH = 350;
const FINAL_HEIGHT = 760;

// DOM-Elemente
const morphElement = document.querySelector('.morph-element');
const iphoneFrame = document.querySelector('.iphone-frame');

// Scroll-Handler
function handleScroll() {
  // Berechne den Scroll-Fortschritt (0 bis 1)
  const scrollProgress = window.scrollY / window.innerHeight;

  // Animation nur während der ersten Bildschirmhöhe
  if (scrollProgress <= 1) {
    // Basis-Skalierung von 1 zu 0.4
    const scale = 1 - (scrollProgress * 0.6);

    // Border-Radius von 0 zu 40px
    const borderRadius = scrollProgress * 40;

    // Größenanpassung
    const currentWidth = window.innerWidth - (scrollProgress * (window.innerWidth - FINAL_WIDTH));
    const currentHeight = window.innerHeight - (scrollProgress * (window.innerHeight - FINAL_HEIGHT));

    // Styles anwenden
    morphElement.style.width = `${currentWidth}px`;
    morphElement.style.height = `${currentHeight}px`;
    morphElement.style.borderRadius = `${borderRadius}px`;
    morphElement.style.transform = `translate(-50%, -50%) scale(${scale})`;

    // iPhone Frame einblenden
    iphoneFrame.style.opacity = scrollProgress;
  }
}

// Event-Listener hinzufügen
window.addEventListener('scroll', handleScroll);

// Initial aufrufen
handleScroll();