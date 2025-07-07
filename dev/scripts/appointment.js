// FORM SELECT
$(function() {
  const selectActive = $('.appointment__item--simple .appointment__selected');
  const selectList = $('.appointment__item--simple .appointment__list');
  selectActive.each(function(index, item) {
    let defaultForSelect = $(this).find('.appointment__option').first().text();
    $(this).find('span').text(defaultForSelect);

    $(this).click(function() {
      selectList.removeClass('opened');
      $(this).find('.appointment__list').addClass('opened');
    });
  });
});

// OPTION--SIMPLE
  const selectOption = $('.appointment__item--simple .appointment__option');
  selectOption.click(function() {
    let selectedOption = $(this).text();
    $(this).closest('.appointment__selected').find('span').text(selectedOption);
    setTimeout(() => {
      $(this).parent().removeClass('opened');
      $(this).parent().removeClass('opened');
      // Запись в скрытом поле формы
      if($(this).closest('.appointment__item--practice')) {
        $('#form-practice').val(selectedOption);
        console.log('Значение скрытого инпута специальности(#form-practice): ' + $('#form-practice').val());
      }
    }, 50);
  });

// DOCTORS LIST
$(function() {
  const doctorsList = $('.appointment__doctors-list');
  const doctorOption = $('.appointment__doctor');
  doctorOption.hide();
  doctorOption.first().show();
  doctorOption.click(function(){
    doctorsList.toggleClass('open');
    doctorOption.toggle();
    $(this).show().toggleClass('selected');
    // Запись в скрытом поле формы
    let docName = $('.appointment__doctor.selected').find('.appointment__doctor-name').text();
    if(docName) {
      $('#form-doctor').val(docName);
      console.log('Значение скрытого инпута имя врача (#form-doctor): ' + $('#form-doctor').val());
    }
  });
});

// DATA AND TIME SELECT
$(function() {
  // date
  const dateItem = $('.appointment__date-item');
  dateItem.click(function() {
    dateItem.removeClass('selected');
    $(this).toggleClass('selected');
    $('.appointment__time-item').removeClass('selected');
    // Запись в скрытом поле формы
    let dateChoisen = $('.appointment__date-item.selected').text();
    $('#form-date').val(dateChoisen);
    console.log('Значение скрытого инпута даты (#form-date): ' + $('#form-date').val());
  })
  // time
  const timeItem = $('.appointment__time-item');
  timeItem.click(function() {
    timeItem.removeClass('selected');
    $(this).toggleClass('selected');
    // Запись в скрытом поле формы
    let timeChoisen = $('.appointment__time-item.selected').text();
    $('#form-time').val(timeChoisen);
    console.log('Значение скрытого инпута времени(#form-time): ' + $('#form-time').val());
  })
});