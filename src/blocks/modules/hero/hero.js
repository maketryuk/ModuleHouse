const mainSlider = new Swiper('.hero-slider', {
  speed: 1000,
  // Navigation arrows
  navigation: {
    nextEl: '.hero-slider-next',
    prevEl: '.hero-slider-prev',
  },
  breakpoints: {
    992: {
      allowTouchMove: false,
    },
  }
});