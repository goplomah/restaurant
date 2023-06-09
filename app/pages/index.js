import  '../styles/index.scss';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const menuBtn = document.querySelector('.header__menu-btn');
const menu = document.querySelector('.header__menu-list');
const buttonToTop = document.querySelector('.to-top');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle("header__menu-list_active");
});

window.addEventListener('scroll', () => {
  buttonToTop.classList.toggle('to-top_active', window.scrollY>500)
})
  
  buttonToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior: 'smooth'})
  })


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