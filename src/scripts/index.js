import '../pages/index.css';

import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


'use strict';

(function() {

  const bannerSwiper = new Swiper('.banner__swiper-container', {
    init: true,
    loop: true,
    slidesPerView: 1,
    setWrapperSize: true,
    wrapperClass: 'banner__swiper-wrapper',
    slideClass: 'banner__card',

    navigation: {
      nextEl: '.banner__card-arrow-right',
      prevEl: '.banner__card-arrow-left',
    },
  });

  const principlesSwiper = new Swiper('.principles__swiper-container', {
    init: true,
    loop: true,
    slidesPerView: 1,
    setWrapperSize: true,
    wrapperClass: 'principles__swiper-wrapper',
    slideClass: 'principles__card',

    navigation: {
      nextEl: '.principles__card-arrow-right',
      prevEl: '.principles__card-arrow-left',
    },
  });

  const reviewsSwiper = new Swiper('.reviews__swiper-container', {
    init: true,
    loop: true,
    slidesPerView: 2,
    setWrapperSize: true,
    wrapperClass: 'reviews__swiper-wrapper',
    slideClass: 'reviews__card',

    navigation: {
      nextEl: '.reviews__card-arrow-right',
      prevEl: '.reviews__card-arrow-left',
    },

    pagination: {
      el: '.reviews__pagination',
      type: 'bullets',
      clickable: true,
      bulletClass: 'reviews__pagination-item',
      bulletActiveClass: 'reviews__pagination-item_active',
    },
  });

})();