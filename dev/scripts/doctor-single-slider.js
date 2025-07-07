// DOCTOR SINGLE SLIDER
setTimeout(()=>{
const avatar = new Swiper('.doctor-single__slider', {
    slidesPerView: 1,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1200:{
        slidesPerView: '5',
      },
      900:{
        slidesPerView: '4',
      },
      700:{
        slidesPerView: '3',
      },
      600:{
        slidesPerView: '2',
      },
      500:{
        slidesPerView: '2',
      },
      480:{
        slidesPerView: '1',
      },
    }
});
}, 1000);