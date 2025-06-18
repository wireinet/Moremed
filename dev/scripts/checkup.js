$(function(){
  const checkupPopupList = $('.checkup__popuplist');
  const checkupSublist = $('.checkup__sublist');
  if(matchMedia('(max-width:570px)').matches){ 
    checkupSublist.click(function(){
      $(this).find('.checkup__popuplist').toggleClass('open');
    });
  }
  else {
    checkupSublist.mouseenter(function(){
      checkupPopupList.removeClass('open');
      $(this).find('.checkup__popuplist').addClass('open');
    });
    checkupSublist.mouseleave(function(){
      checkupPopupList.removeClass('open');
    });
  }


});