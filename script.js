// script.js

// Wähle deine Elemente im DOM aus
const heroImage = document.querySelector(".hero-image");
const screenImage = document.querySelector(".screen-image");

// Sicherheitscheck (optional)
if (!heroImage) {
  console.error("Fehler: .hero-image nicht gefunden!");
}
if (!screenImage) {
  console.error("Fehler: .screen-image nicht gefunden!");
}

// Funktion, die beim Scrollen aufgerufen wird
window.addEventListener("scroll", () => {
  // Wie weit ist gescrollt?
  const scrollY = window.scrollY;

  // Höhe des Browserfensters (für Berechnungen)
  const viewportHeight = window.innerHeight;

  // Hero-Bild soll 100vh hoch sein, also heroFullHeight = viewportHeight
  const heroFullHeight = viewportHeight;

  /* =============================
     1) Hero-Bild verkleinern
     ============================= */
  if (scrollY < heroFullHeight) {
    // factor = 0 (oben) bis 1 (ganz unten am Hero)
    const factor = scrollY / heroFullHeight;
    // Skaliere von 1 bis ~0.6
    const scaleHero = 1 - factor * 0.4;
    heroImage.style.transform = `scale(${scaleHero})`;
    heroImage.style.opacity = `${1 - factor}`; // gleichzeitig Ausblenden
  } else {
    // Wenn wir schon unter dem Hero-Bild sind
    heroImage.style.transform = "scale(0.6)";
    heroImage.style.opacity = "0";
  }

  /* =============================
     2) Bild im iPhone heranzoomen
     ============================= */
  const startZoom = heroFullHeight;    // ab Höhe des Hero-Bereichs
  const endZoom = startZoom + 500;     // bis z.B. 500px später

  if (scrollY > startZoom) {
    // Progress von 0..1 für den Zoom-Bereich
    let progress = (scrollY - startZoom) / (endZoom - startZoom);
    progress = Math.max(0, Math.min(1, progress));

    // Skala von 0.3 bis 1
    const scaleInside = 0.3 + 0.7 * progress;

    screenImage.style.transform = `scale(${scaleInside})`;
    screenImage.style.opacity = progress;
  } else {
    // Vor dem Start-Zoom ist das iPhone-Bild klein & unsichtbar
    screenImage.style.transform = "scale(0.3)";
    screenImage.style.opacity = "0";
  }
});
