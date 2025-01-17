// STATIC SWIPER
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    // centeredSlides: true,
    loopFillGroupWithBlank: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // 1024: {
        //   slidesPerView: 5,
        //   spaceBetween: 50,
        // },
      },
  });