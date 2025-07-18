// GALLERY SINGLE SLIDER
$(function(){
setTimeout(()=>{
const checkupSingleSlider = new Swiper('.page__info-gallery-slider', {
    slidesPerView: '1',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
});
}, 200);

});
// PLAY IN SINGLE SLIDER
$(function(){
  const playinSingleSlider = $('.page__info-gallery-item .play');
  playinSingleSlider.click(function(){
    $(this).siblings('.video').play();
  });
});