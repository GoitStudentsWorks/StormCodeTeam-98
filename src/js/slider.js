import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

const swiper = new Swiper('.container-swiper', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

const newSwiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 20,
  direction: 'vertical',
  speed: 400,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
