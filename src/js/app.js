import * as helpersFuctions from './modules/functions.js';
import Swiper, { Navigation, Pagination } from 'swiper';

helpersFuctions.isWebp();
helpersFuctions.setVH();

window.addEventListener('resize', helpersFuctions.setVH);

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
