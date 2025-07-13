// РЕЗЮМЕ
$(function() {
  if($('body').hasClass('page--clinic-vacancy')) {
    let buttonOpenSendResume = $('.clinic__resume button');
    let SendResumePopup = $('.popup--resume');
    popup(buttonOpenSendResume, SendResumePopup);
  }
});