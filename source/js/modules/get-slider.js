const getSlider = () => {
  if (document.querySelector('.trainers-page__swiper')) {
    const coachesSwiper = document.querySelector('.trainers-page__swiper');
    const coachesSwiperWrapper = document.querySelector('.trainers-page__swiper-wrapper');
    const coachesButtons = document.querySelectorAll('.trainers-page__button');

    coachesSwiper.classList.remove('trainers-page__swiper--nojs');
    coachesSwiperWrapper.classList.remove('trainers-page__swiper-wrapper--nojs');
    coachesButtons.forEach((coachesButton) => {
      coachesButton.classList.remove('trainers-pages__button--nojs');
    });

    // eslint-disable-next-line no-unused-vars,no-undef
    const swiper = new Swiper('.trainers-page__swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 4,
      spaceBetween: 40,
      speed: 1000,
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
        nextEl: '.trainers-page__button--next',
        prevEl: '.trainers-page__button--prev',
      },
    });
  }
};

export {getSlider};
