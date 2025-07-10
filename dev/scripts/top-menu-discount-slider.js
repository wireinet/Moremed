// DISCOUNT SLIDER
setTimeout(()=>{
const topMenuDiscountSlider = new Swiper('.subsubmenu__discount', {
    slidesPerView: '1',
    spaceBetween: 20,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
});
}, 1000);