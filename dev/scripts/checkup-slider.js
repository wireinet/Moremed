// CHECKUP SLIDER
setTimeout(()=>{
const checkupSlider = new Swiper('.checkup__slider', {
    slidesPerView: '1',
    spaceBetween: 30,
    loop: true,
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