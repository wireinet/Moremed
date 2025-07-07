// OPENBOX типа FAQ
$(function() {
  const openboxHeader = $('.openbox__header');
  openboxHeader.click(function(){
    let item = $(this).closest('.openbox__item');
    if(item.hasClass('open')){
      item.find('.openbox__content').slideUp(200, function(){
        item.removeClass('open');
      });
    }
    else {
      $(this).next('.openbox__content').slideToggle(200);
      item.toggleClass('open');
    }
  });
  // openboxHeader.click(function(){
  //   let item = $(this).closest('.openbox__item');
  //   if(item.hasClass('open')){

  //   }
    // if($(this).closest('.openbox__item').hasClass('openbox__header--active')){


    // }
  });