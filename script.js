// Selektoren
const heroFull = document.querySelector(".hero-full");
const iphoneWrap = document.querySelector(".iphone-wrap");

// Scroll-Listener
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const winH = window.innerHeight;

  /*
    1) Von scrollY=0 bis scrollY=winH:
       -> Das Hero-Bild skaliert von 1 auf 0.3
       -> Es blendet aus (opacity 1 -> 0)
  */
  if (scrollY < winH) {
    const factor = scrollY / winH; // 0..1
    const scaleHero = 1 - factor * 0.7; // 1 -> 0.3
    heroFull.style.transform = `scale(${scaleHero})`;
    heroFull.style.opacity = (1 - factor).toString();
  } else {
    // Unterhalb von 1 Bildschirmhöhe
    heroFull.style.transform = "scale(0.3)";
    heroFull.style.opacity = "0";
  }

  /*
    2) Von scrollY=winH bis scrollY=2*winH:
       -> Das iPhone taucht auf (opacity:0->1), skaliert von 0.3->1
  */
  const startZoom = winH;        // ab 100vh
  const endZoom = 2 * winH;      // bis 200vh

  if (scrollY >= startZoom && scrollY <= endZoom) {
    // progress: 0..1 
    let progress = (scrollY - startZoom) / (endZoom - startZoom);
    progress = Math.max(0, Math.min(1, progress));

    const scalePhone = 0.3 + 0.7 * progress; // 0.3->1
    iphoneWrap.style.transform = `translate(-50%, -50%) scale(${scalePhone})`;
    iphoneWrap.style.opacity = progress.toString();
  } else if (scrollY < startZoom) {
    // Noch vor dem Start
    iphoneWrap.style.transform = "translate(-50%, -50%) scale(0.3)";
    iphoneWrap.style.opacity = "0";
  } else {
    // Schon nach dem Ende
    iphoneWrap.style.transform = "translate(-50%, -50%) scale(1)";
    iphoneWrap.style.opacity = "1";
  }
});
