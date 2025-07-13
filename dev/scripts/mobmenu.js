// MOBMENU
$(function() {
  const mobmenuTriggerButton = $('.hamburger');
  const mobmenu = $('.popup--mobmenu');
  const hassubmenu = $('.mobmenu__item.hassubmenu > a');
  hassubmenu.on('click', function(e) {
    e.preventDefault();
    $(this).parent('.hassubmenu').toggleClass('opened');
    $(this).siblings('.mobmenu__submenu').slideToggle();
  })
  popup(mobmenuTriggerButton, mobmenu);
});