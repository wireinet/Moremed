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
      popup.removeClass('active');
      enableScrollBody();
    })
    bg.click(function(e){
      popup.removeClass('active');
      enableScrollBody();
    });
    console.log($(this));
}