$(function(){

  const checkupFilterItems = $('.filter__check-item');
  const checkupItems = $('.checkup__item');
  
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
    }
    if (activeFilters.length > 0 && activeFilters.includes(checkupForPractice)) {
      $(this).fadeIn(100);
    }
    });

  if (activeFilters.length === 0) {
    checkupItems.fadeIn(100);
  }

  });

});