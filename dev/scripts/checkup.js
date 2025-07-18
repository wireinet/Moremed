// checkup sublist open
$(function(){
  const checkupPopupList = $('.checkup__popuplist');
  const checkupSublist = $('.checkup__sublist');
  function checkScreenForCheckups() {
    if(matchMedia('(max-width:570px)').matches){ 
    checkupSublist.click(function(){
      checkupPopupList.removeClass('open');
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
  }
  checkScreenForCheckups();
  $(window).resize(function(){checkScreenForCheckups()});
});


	$(document).mouseup( function(e){
		var stayOpen = $( ".checkup__popuplist.open" ); // тут указываем ID элемента
		if ( !stayOpen.is(e.target) // если клик был не по нашему блоку
      && stayOpen.has(e.target).length === 0 ) {
			stayOpen.removeClass('open');
		}
	});



// Checkup sublist count
$(function(){
  const checkupSublist = $('.checkup__sublist');
  const checkupSublistCount = $('.checkup__sublist span');

  checkupSublist.each(function(index, item){
    let popuplistItems = $(item).find('.checkup__popuplist li');
    $(item).find('span').text(popuplistItems.length)

  });
})