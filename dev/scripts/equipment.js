// EQUIPMENT
setTimeout(()=>{
const avatar = new Swiper('.equipment__slider', {
    slidesPerView: '1',
    loop: true,
    // navigation: {
    //   nextEl: '.equipment .slider__arrow--next',
    //   prevEl: '.equipment .slider__arrow--prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
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