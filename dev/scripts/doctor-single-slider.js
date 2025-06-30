// DOCTOR SINGLE SLIDER
setTimeout(()=>{
const avatar = new Swiper('.doctor-single__slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.doctor-single__slider .slider__arrow--next',
      prevEl: '.doctor-single__slider .slider__arrow--prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    breakpoints: {
      1200:{
        slidesPerView: '4',
      },
      900:{
        slidesPerView: '3',
        spaceBetween: 30,
      },
      600:{
        slidesPerView: '2',
      },
      480:{
        slidesPerView: '1',
      },
    }
});
}, 1000);