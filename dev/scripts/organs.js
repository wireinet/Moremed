// ORGANS
$(function() {
  const organ = $('.organs__item');
  organ.click(function(){
    if($(this).hasClass('opened')){
      $(this).removeClass('opened');
      organ.find('.organ__info').slideUp(200);
    }
    else{
      organ.removeClass('opened');
      organ.find('.organ__info').slideUp(200);
      $(this).find('.organ__info').slideToggle(200);
      $(this).toggleClass('opened');
    }



  });
})