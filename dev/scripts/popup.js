// POPUPs
const popup = function(button, popup) {
    const popupClose = $('.popup__close');
    const popupContent = $('.popup__content');
    let bg = $('.popup');
    button.click(function(e){
      $('.popup').removeClass('active');
      e.preventDefault();
      disableScrollBody();
      popup.addClass('active');
      if(popup.hasClass('popup--checkup-appointent')){
        // Подставляем заголовок с названием чекапа
        let currentCheckupName = $(this).closest('.checkup__item').find('.checkup__title h3').text();
        let popupTitleDefault = popup.find('.popup__title').text();
        let newPopupTitle = popupTitleDefault + ':' + "\n" + currentCheckupName;
        $('.popup__title').text(newPopupTitle);
        // Записываем его в скрытое поле name='checkup-name'
        let checkupNameField = popup.find('input[name="checkup-name"]');
        checkupNameField.val(currentCheckupName);
      }
    });
    popupClose.click(function(){
      let currentPopup = $(this).closest('.popup');
      function clearFormValues(){
        if(currentPopup.hasClass('popup--form')){
          currentPopup.find('input:not([type="submit"])').each(function(){
            if($(this).val() !== ''){
              $(this).val('');
            }
            $(this).removeClass('error');
          })
        }
      }
      // Если надо очистить форму при закрытии (Но, на esc на очистит, не прописывал):
      clearFormValues();
      popup.removeClass('active');
      enableScrollBody();
      $(this).find('.popup').find('input').each(function(){
        $(this).val('');
      });
      // При закрытии формы, сбрасываем заголовок:
      function defaultpopupTitle(){
        if(currentPopup.hasClass('popup--checkup-appointent')){
          setTimeout(function(){currentPopup.find('.popup__title').text('Запись на чекап')}, 300);
        }
      }
      defaultpopupTitle();

      // При закрытии сбрасываем поле name='checkup-name':
      let checkupNameField = $('.popup--checkup-appointent.active').find('input[name="checkup-name"]');
      checkupNameField.val('');
    });


      bg.click(function(e){
        if(!$(e.target).closest(popupContent).length){
          popup.removeClass('active');
          enableScrollBody();
        }
      });

    // close popup on esc
    $(document).keydown(function(e){
      if(e.keyCode === 27){
        popup.removeClass('active');
        enableScrollBody();
        let popupAppointment = $('.popup--checkup-appointent');
        if(popupAppointment){
          setTimeout(function(){popupAppointment.find('.popup__title').text('Запись на чекап');}, 300);
        }
      }
    })
}