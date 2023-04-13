const getSlider = () => {

  // eslint-disable-next-line no-unused-vars
  const slider = new Swiper('.swiper', {
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
};

export {getSlider};
