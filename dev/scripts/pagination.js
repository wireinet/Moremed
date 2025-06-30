// PAGINATION
$(function(){
  const pagination = $('.pagination__item');
  pagination.on('click', function(){
    if(!$(this).hasClass('current')){
      pagination.removeClass('current');
      $(this).addClass('current');
    }
  });
});