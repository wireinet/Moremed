// FORM SELECT
$(function() {
  const selectActive = $('.appointment__selected');
  const selectlist = $('.appointment__list');
  const selectOption = $('.appointment__option');
  let defaultValueFormSelect = selectActive.find('.appointment__option');
  selectActive.each(function(index, item) {
    let defaultForSelect = $(this).find('.appointment__option').first().text();
    $(this).find('span').text(defaultForSelect);
    selectOption.click(function() {
      let selectedOption = $(this).text();
      selectActive.find('span').text(selectedOption);
    })
    $(this).click(function() {
      $(this).find('.appointment__list').toggleClass('opened');
    });

  });
});