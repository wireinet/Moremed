// INCLUDE
$(function(){
  const includeItem = $('.include__item');
  includeItem.click(function(){
    $(this).find('.include__content').slideToggle();
  });
});