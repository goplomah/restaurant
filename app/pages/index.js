import  '../styles/index.scss';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],

    pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    },

    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },

    effect: "fade",
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
});