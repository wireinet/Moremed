// MOBBAR SLIDER
$('document').ready(function(){
  function showMobbar(){
    $('.mobbar').addClass('open');
  }
  setTimeout(showMobbar, 1000);
});
setTimeout(()=>{
const mobbarSlider = new Swiper('.mobbar__slider', {
    slidesPerView: '5',
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
}, 200);