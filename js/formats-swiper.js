const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
  },
  navigation: {
    nextEl: '.slider-button.next',
    prevEl: '.slider-button.prev',
  },
});

