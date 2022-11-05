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
    }
  });