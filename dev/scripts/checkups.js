// CHECKUPS FILTERS
$(function(){

  const checkupFilterItems = $('.filter__check-item');
  const checkupItems = $('.checkup__item');
  const filterButtons = $('.filter__buttons');
  
  checkupFilterItems.click(function(){
  
    $(this).toggleClass('active');
    const activeFilters = $('.filter__check-item.checked')
    .map((i, el) => $(el).text().trim()).get();
    checkupItems.fadeOut(100);
    checkupItems.each(function (index, checkupitem) {
    const checkupForGender = $(checkupitem).find('.gender').text();
    const checkupForPractice = $(checkupitem).find('.practice').text();
    if (activeFilters.length > 0 && activeFilters.includes(checkupForGender)) {
      $(this).fadeIn(100);
      filterButtons.fadeIn(100);
      
    }
    if (activeFilters.length > 0 && activeFilters.includes(checkupForPractice)) {
      $(this).fadeIn(100);
      filterButtons.fadeIn(100);
    }
    });

  if (activeFilters.length === 0) {
    checkupItems.fadeIn(100);
    filterButtons.fadeOut(100);
  }

  // COUNT
  let filterCount = activeFilters.length;
  let filterCountContainer = $('.filter__count');
  let filterCurrentCount = filterCount;
  });

});

// CHECKUPS FILTERS MOB
$(function(){
  const filterSidebar = $('.filter__sidebar');
  const filterSidebaMob = $('.filter__sidebar-mob');
  const filterPopup = $('.popup--checkup-filter');
  const filterContainer = $('.checkups__filter');

  // sticky
  function stickyFilterMob() {

    let filterSidebaMobFromTop = filterSidebaMob.offset();
    $(window).scroll(function () {
        let pageContainer = $('.page__content');
        let checkupsContainer = $('.checkups__filter');
        if ($(this).scrollTop() > filterSidebaMobFromTop.top - 60) {
            filterSidebaMob.addClass('fixed');
            pageContainer.prepend(filterSidebaMob);
        }
        else {
            filterSidebaMob.removeClass('fixed');
            checkupsContainer.prepend(filterSidebaMob);
        }
    });
    }
  if($('body').hasClass('page--checkups')){
    stickyFilterMob();
  }

  function filterToMob(){
    if(matchMedia('(max-width: 700px)').matches){
      popup(filterSidebaMob, filterPopup);
      filterPopup.find('.popup__content').append(filterSidebar);
      let okButton = $('.filter__ok');
      okButton.click(function(){
        filterPopup.removeClass('active');
        enableScrollBody();
        let anchorToFilterFromTop = $("#checkups-list").offset();
        let anchorToFilterFromTopY = anchorToFilterFromTop.top - 100;
        console.log(anchorToFilterFromTopY);
        console.log($());
        $('html, body').animate({scrollTop: anchorToFilterFromTopY},'slow');
      });
    }
    else {
      filterContainer.prepend(filterSidebar);
    }
  }
  if($('body').hasClass('page--checkups')){
    $(window).resize(function(){ filterToMob()});
    filterToMob();
  }
});

// CHECKUPS ЗАПИСЬ
$(function(){
  let checkupAppointentButton = $('.checkup__zapis');
  let checkupAppointentPopup = $('.popup--checkup-appointent');
  popup(checkupAppointentButton, checkupAppointentPopup);
});