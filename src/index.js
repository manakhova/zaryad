import './scss/main.scss'; 
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".slider .swiper", {
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,
  spaceBetween: 200,
  navigation: {
    nextEl: ".slider__btn--next",
    prevEl: ".slider__btn--prev",
  }
});

var swiperItems = new Swiper(".choise .swiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".choise__btn--next",
    prevEl: ".choise__btn--prev",
  }
});

