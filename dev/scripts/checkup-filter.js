// FILTER CHECKUPS
$(function(){
  let checkupFilterItem = $('.filter__check-item');
  let resetFilterButton = $('.filter__reset button');
  let checkupItems = $('.filter__content .checkup__item');
  
  // filter-checks
    checkupFilterItem.click(function(){
      $(this).toggleClass('checked');
    });

  // filter-reset
    resetFilterButton.click(function(){
      checkupFilterItem.removeClass('checked');
      checkupItems.fadeIn(300);
    });
});