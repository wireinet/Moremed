// FORM--slim
$(function(){
  // disable send
  const agreementCheckbox = $('.form__agreement input');
  const send = $('.form__submit');
  send.click(function(e){
    e.preventDefault();
    formSend();
    }
  )

  function formSend(){
    console.log('sending...');
    const form = $('.form');
    let sendFormOk = `<div class="form__sended"><strong>Спасибо!</strong>Мы с вами свяжемся как можно скорее!</div>`;
    form.html(sendFormOk);
  }



  agreementCheckbox.on('change', function(){
    if(agreementCheckbox.is(':checked')){
      send.attr('disabled', false);
    }else{
      send.attr('disabled', true);
    }
  })
    
  });