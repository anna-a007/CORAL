const swiper = new Swiper (".swiper-container.swiper-one", {
  slidesPerView: 4,
  spaceBetween: 39,
    loop: true,
    loopFillGroupWithBlank: true,

    speed: 800,
    pagination: {
      el: ".swiper-pagination1",
      clicable: true,
    },
    autoplay:{
      delay:2500,
      // disableOnIteraction:false,
    },

    breakpoints: {
      320:{
        slidesPerView: 2.5,
      },

      540: {
      slidesPerView: 3.5,
      spaceBetween: 16,
          },
      670: {
      slidesPerView: 4,
      // spaceBetween: 10,
            },
      // 1000: {
      // slidesPerView: 4,
      // // spaceBetween: 10,
      //       },
    },
  });