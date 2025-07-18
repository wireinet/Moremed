// TOPBAR
$(function() {
  if(!$('body').hasClass('accessibility')) {
    const topbar = $('.topbar');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        topbar.addClass('fixed');
      } else {
        topbar.removeClass('fixed');
      }
    });
  }
});