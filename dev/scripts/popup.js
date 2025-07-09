// POPUPs
const popup = function(button, popup) {
    const popupClose = $('.popup__close');
    const popupContent = $('.popup__content');
    let bg = $('.popup');
    button.click(function(){
      disableScrollBody();
      popup.addClass('active');
    });
    popupClose.click(function(){
      let currentPopup = $(this).closest('.popup');
      if(currentPopup.hasClass('popup--form')){
        currentPopup.find('input:not([type="submit"])').each(function(){
          if($(this).val() !== ''){
            $(this).val('');
          }
          $(this).removeClass('error');
        })
      }
      popup.removeClass('active');
      enableScrollBody();
      $(this).find('.popup').find('input').each(function(){
        $(this).val('');
      });
    })
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
      }
    })
}