const swiper = new Swiper (".swiper-container.swiper-one", {
  slidesPerView: 4,
  // spaceBetween: 39,
    loop: true,
    loopFillGroupWithBlank: true,

    speed: 800,
    pagination: {
      el: ".swiper-pagination2",
      clicable: true,
    },
    autoplay:{
      delay:2500,
      disableOnIteraction:false,
      
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
    },
  }
});


// const swiperTwo = new Swiper (".swiper-container2.swiper-two", {
//   slidesPerView: 4,
//   spaceBetween: 31,
//   loop: true,
//   loopFillGroupWithBlank: true,
      
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//     },
  
//   speed: 800,
//   pagination: {
//     el: ".swiper-pagination1",
//     clicable: true,
//     },
//   autoplay:{
//     delay:2500,
//     }
// });

