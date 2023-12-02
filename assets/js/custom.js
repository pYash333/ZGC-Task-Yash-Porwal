$(function () {
  // Hero slider js
  var swiper = new Swiper(".hero-slider", {
    loop: true,
    // effect: "fade",
  });

  //   Maquee slider js

  var swiper = new Swiper(".marquee-slider", {
    slidesPerView: "auto",
    autoHeight: true,
    spaceBetween: 56,
    freeMode: true,
    speed: 18000,
    autoplay: {
      delay: 0,
    },
  });

  //   Influencer slider js

  var swiper = new Swiper(".influencer-slider", {
    slidesPerView: "3",
    autoHeight: true,
    spaceBetween: 12,
    loop: true,
    freeMode: true,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
});
