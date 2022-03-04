import * as helpersFuctions from './modules/functions.js';
import Swiper, { Mousewheel, Parallax, Controller } from 'swiper';

helpersFuctions.isWebp();
helpersFuctions.setVH();

window.addEventListener('resize', helpersFuctions.setVH);

const sliderMain = new Swiper('.slider_main', {
  // configure Swiper to use modules
  modules: [Mousewheel, Parallax, Controller],

  freeMode: true,
  centeredSlides: true,
  mousewheel: true,
  parallax: true,
  breakpoints: {
    0: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 3.5,
      spaceBetween: 60,
    },
  },
});

const sliderBg = new Swiper('.slider_bg', {
  // configure Swiper to use modules
  modules: [Parallax, Controller],
  centeredSlides: true,
  parallax: true,
  spaceBetween: 60,
  slidesPerView: 3.5,
});

sliderMain.controller.control = sliderBg;

function onEscPress(evt) {
  if (evt.key === 'Escape' || evt.keyCode === ESC_KEYCODE) {
    document.querySelectorAll('.slider_main .slider__item').forEach(item => {
      hideCard(item);
    });
    document.removeEventListener('keydown', onEscPress);
  }
}

function showCard(card) {
  document.querySelectorAll('.slider_main .slider__item').forEach(item => {
    hideCard(item);
    document.addEventListener('keydown', onEscPress);
  });

  card.classList.add('opened');
}

function hideCard(card) {
  card.classList.remove('opened');
}

function onCardClick(event) {
  const currentCard = event.target.closest('.slider__item');

  if (currentCard.classList.contains('opened')) {
    hideCard(currentCard);
  } else {
    showCard(currentCard);
  }
}

document.querySelectorAll('.slider_main .slider__item').forEach(item => {
  item.addEventListener('click', onCardClick);
});

let desc = document.querySelector('.description');
sliderMain.on('slideChange', () => {
  sliderMain.activeIndex > 0
    ? desc.classList.add('hidden')
    : desc.classList.remove('hidden');
});
