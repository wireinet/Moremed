// APPOINTNENT SLIDER
setTimeout(()=>{
const appointmentDataSlider = new Swiper('.appointment__date .swiper', {
    slidesPerView: '3',
    spaceBetween: 20,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      840 :{
        slidesPerView: '4',
        spaceBetween: 10,
      },
      930:{
        slidesPerView: '5',
        spaceBetween: 10,
      },
      700:{
        slidesPerView: '3',
        spaceBetween: 10,
      },
      681:{
        slidesPerView: '3',
        spaceBetween: 1,
      },
      560:{
        slidesPerView: '5',
        spaceBetween: 10,
      },
      450:{
        slidesPerView: '4',
        spaceBetween: 1,
      },
      320:{
        slidesPerView: '3',
        spaceBetween: 1,
      },
    }
});
const appointmentTimeSlider = new Swiper('.appointment__time .swiper', {
    slidesPerView: '3',
    spaceBetween: 10,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      930:{
        slidesPerView: '5',
      },
      820:{
        slidesPerView: '4',
      },
      600:{
        slidesPerView: '5',
      },
      681:{
        slidesPerView: '3',
      },
      460:{
        slidesPerView: '4',
      },
      320:{
        slidesPerView: '3',
      },
    }
});
}, 1000);