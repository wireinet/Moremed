// SLIDER
setTimeout(()=>{
const avatar = new Swiper('.avatar', {
    slidesPerView: '1',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});
}, 1000);

// check video POPUP
$(function() {
  let blockItem = $('.block-item');
  let avatar = $('.avatar');
  blockItem.each(function(index, item){
    let videoLink = $(this).find('.video-link').text();
    let currentAvatar = $(this).find('.avatar');
    if(videoLink != "") {
      currentAvatar.addClass('avatar--video');
    }
  });
  });

// VIDEO POPUP
$(function() {
  const avatar = $('.avatar');
    // click
    const popupVideo = $('.popup--video');
    avatar.click(function(){
      if($(this).hasClass('avatar--video')) {
      // add video
      let videoLink = $(this).parent().parent().find('.video-link').text();
      console.log(videoLink);
      let videoSrc = popupVideo.find('.video').find("source")[0];
      let videoBlock = popupVideo.find('.video');
      let play = popupVideo.find('.play');
      videoSrc.src = videoLink;
      videoBlock[0].load();
      play.click(function(){
        videoBlock[0].play();
        play.hide();
        videoBlock.click(function() {
          videoBlock[0].pause();
          play.show();
        });
      });
      // disable scroll
      const disableScrollBody = () => {
        document.body.dataset.scrollY = window.scrollY;
        
      }
      // open
      popupVideo.addClass('active');
      disableScrollBody();
      // close
      popupVideo.click(function(e){
        if(popupVideo.is(e.target)) {
          popupVideo.removeClass('active');
          enableScrollBody();
          videoSrc.src = ''
        }
      });
    }
    });
    // /click

});
