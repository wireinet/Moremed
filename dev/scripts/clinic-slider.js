// EQUIPMENT
setTimeout(()=>{
const avatar = new Swiper('.clinic-block__slider', {
    slidesPerView: '1',
    loop: true,
    navigation: {
      nextEl: '.clinic-block__slider .slider__arrow--next',
      prevEl: '.clinic-block__slider .slider__arrow--prev',
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