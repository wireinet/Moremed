// checkup sublist open
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

// Checkup sublist count
$(function(){
  const checkupSublist = $('.checkup__sublist');
  const checkupSublistCount = $('.checkup__sublist span');

  checkupSublist.each(function(index, item){
    let popuplistItems = $(item).find('.checkup__popuplist li');
    $(item).find('span').text(popuplistItems.length)
    // $(item).find('span').text(popuplistItems.length);

  });
})