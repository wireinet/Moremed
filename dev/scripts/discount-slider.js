// DISCOUNT SLIDER
setTimeout(()=>{
const discountSlider = new Swiper('.discount__slider', {
    slidesPerView: '1',
    spaceBetween: 30,
    loop: true,
    // navigation: {
    //   nextEl: '.discount__slider .slider__arrow--next',
    //   prevEl: '.discount__slider .slider__arrow--prev',
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
        slidesPerView: '3',
      },
      920:{
        slidesPerView: '2',
      },
    }
});
}, 1000);