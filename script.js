// Selektoren
const heroImage = document.querySelector(".hero-image");
const screenImage = document.querySelector(".screen-image");
const iphoneSection = document.querySelector(".iphone-section");

// Funktion, die beim Scrollen getriggert wird
window.addEventListener("scroll", () => {
  console.log("scrolling");
  // Wie weit ist gescrollt?
  const scrollY = window.scrollY;

  // Höhe des Browserfensters (für Berechnungen)
  const viewportHeight = window.innerHeight;

  // 1) Hero-Bild verkleinern, wenn man über das Ende des Hero-Bereichs scrollt
  // ------------------------------------------------------
  // Wenn "scrollY" noch im Bereich des Hero ist, z.B. 0 - 100% des Viewports
  // kannst Du das Hero-Bild sukzessive skalieren (von 1 zu 0.7 oder so).
  const heroFullHeight = viewportHeight; // hero ist 100vh
  if (scrollY < heroFullHeight) {
    // Faktor berechnen (0 am oberen Rand, 1 am unteren Rand des Hero-Screens)
    const factor = scrollY / heroFullHeight;
    const scale = 1 - factor * 0.4; // von 1 bis ~0.6
    heroImage.style.transform = `scale(${scale})`;
    heroImage.style.opacity = `${1 - factor}`; // zusätzlich Ausblenden
  } else {
    // Falls man komplett drunter gescrollt hat
    heroImage.style.transform = `scale(0.6)`;
    heroImage.style.opacity = `0`;
  }

  // 2) Bild im iPhone "heranzoomen", sobald Hero verschwindet
  // ------------------------------------------------------
  // Ab wann soll das iPhone-Bild richtig sichtbar werden?
  // Zum Beispiel ab dem Punkt, an dem das Hero-Bild vollständig ausgeblendet ist.
  const startZoom = heroFullHeight;
  // Bis zu welchem Punkt soll gesumt werden? z.B. 500px darunter
  const endZoom = startZoom + 500;

  if (scrollY > startZoom) {
    // Berechne, wie stark wir zwischen startZoom und endZoom fortgeschritten sind
    let progress = (scrollY - startZoom) / (endZoom - startZoom);
    // Begrenze progress auf 0 bis 1
    progress = Math.max(0, Math.min(1, progress));

    // Skaliere das Bild im iPhone von 0.3 bis 1
    const scaleInside = 0.3 + 0.7 * progress;
    screenImage.style.transform = `scale(${scaleInside})`;
    // Blende das Bild im iPhone langsam ein
    screenImage.style.opacity = progress;
  } else {
    // Vor dem Start-Zoom ist das Bild im iPhone noch klein & unsichtbar
    screenImage.style.transform = "scale(0.3)";
    screenImage.style.opacity = "0";
  }
});
