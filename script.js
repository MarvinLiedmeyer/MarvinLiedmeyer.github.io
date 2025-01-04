document.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const image = document.querySelector('.parallax-image');
  const iphoneFrame = document.querySelector('.iphone-frame');

  if (scrollY > window.innerHeight / 2) {
      image.style.transform = 'scale(0.5)';
      image.style.opacity = '0';
      iphoneFrame.style.opacity = '1';
  } else {
      image.style.transform = 'scale(1)';
      image.style.opacity = '1';
      iphoneFrame.style.opacity = '0';
  }
});