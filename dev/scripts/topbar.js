// TOPBAR
$(function() {
  $(window).scroll(function() {
    const topbar = $('.topbar');
    if ($(window).scrollTop() > 100 && !$('body').hasClass('accessibility')) {
      topbar.addClass('fixed');
    } else {
      topbar.removeClass('fixed');
    } 
  });

});