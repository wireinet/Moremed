// SLIDER
setTimeout(()=>{
const avatar = new Swiper('.avatar', {
    slidesPerView: '1',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    autoplay: {
        delay: 30000,
    }
});
}, 1000);

// VIDEO POPUP
$(function() {
  const avatar = $('.avatar');
  if(avatar.hasClass('avatar--video')) {
    avatar.on('click', function(){
      alert('Видео');
    })
  }
})