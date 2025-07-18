// DOCTOR SINGLE VIDEO OPEN
$(function(){
  if($('body').hasClass('doctor-single')){
    let singleAvatar = $('.doctor-single__avatar');
    let videoSingle = $('.doctor-single__avatar .video-link').text();
    if(videoSingle !== ""){
      let createdPlay = $('<div>', {class: 'play'});
      createdPlay.append(`<svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22.9309" cy="23.7529" r="22.9097" fill="white"/><path d="M15.0481 30.5959V16.91C15.0481 14.4207 17.7031 12.831 19.8974 14.0065L32.9793 21.0148C35.3233 22.2705 35.2899 25.643 32.9214 26.852L19.8395 33.5297C17.6479 34.6484 15.0481 33.0565 15.0481 30.5959Z" fill="#20AEE4"/></svg>`);
      $('.doctor-single__avatar').append(createdPlay);
      singleAvatar.find('.play').click(function(){
        let popupVideo = $('.popup--video');
        popupVideo.addClass('active');
        disableScrollBody();
        playVideofrom(videoSingle);
      });
    }

  }

});
