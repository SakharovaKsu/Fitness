const getSlider = () => {
  (function () {
    return new Swiper('.trainers-page__swiper', {
      direction: 'horizontal',
      loop: true,

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }());

  (function () {
    return new Swiper('.reviews__box', {
      direction: 'horizontal',
      grabCursor: true,
      loop: false,
      slidesPerView: 1,
      spaceBetween: 40,

      navigation: {
        nextEl: '.reviews__button--next ',
        prevEl: '.reviews__button--prev',
      },
    });
  }());
};

export {getSlider};
