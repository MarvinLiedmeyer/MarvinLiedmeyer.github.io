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
        // Größenanpassung
        const currentWidth = window.innerWidth - (scrollProgress * (window.innerWidth - FINAL_WIDTH));
        const currentHeight = window.innerHeight - (scrollProgress * (window.innerHeight - FINAL_HEIGHT));
        
        // Position berechnen
        const leftPosition = scrollProgress * 50;
        const topPosition = scrollProgress * 50;
        
        // Border-Radius von 0 zu 40px
        const borderRadius = scrollProgress * 40;
        
        // Styles anwenden
        morphElement.style.width = `${currentWidth}px`;
        morphElement.style.height = `${currentHeight}px`;
        morphElement.style.borderRadius = `${borderRadius}px`;
        morphElement.style.left = `${leftPosition}%`;
        morphElement.style.top = `${topPosition}%`;
        morphElement.style.transform = `translate(-${leftPosition}%, -${topPosition}%)`;
        
        // iPhone Frame einblenden
        iphoneFrame.style.opacity = scrollProgress;
    }
}

// Event-Listener hinzufügen
window.addEventListener('scroll', handleScroll);

// Initial aufrufen
handleScroll();