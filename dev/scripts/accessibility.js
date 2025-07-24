// // ACCESSIBILITY BUTTON
$(function(){
    const accessibility = $('.accessibility');
    let accessibilitySaveToStorage = false;
    accessibility.click(function(e){
        $('.topbar').css('zIndex', 2);
        e.preventDefault();
        accessibility.toggleClass('active');
        $("body").toggleClass('accessibility acc-colors acc-colors--normal');
        accPanel.toggle();
        // add styles
        if($('body').hasClass('accessibility')) {
          $('head').append($('<link rel="stylesheet" type="text/css" href="accessibility.css" />'));
        }
        else {
          $('head').find('link[href="accessibility.css"]').attr('href', '');
        }
    });
});

// ACCESSIBILITY PANEL
$(function(){
    accPanel = $('.accessibility__panel');
    if($('body').hasClass('accessibility')) {
      setTimeout(() => {accPanel.show();},1000);
    }
    else {setTimeout(() => {accPanel.hide();},1000);} 
});

// ACCESSIBILITY PANEL COLLAPSE
$(function(){
  const accPanel = $('.accessibility__panel');
  const accPanelCollapse = $('.acc__collapse');
  accPanelCollapse.click(function(){
    accPanel.addClass('collapsed');
    let expandButton = $('<button>', {class: 'button acc__expand', text: 'Развернуть'});
    accPanel.append(expandButton);
    $('.acc__expand').click(function(){
      accPanel.removeClass('collapsed');
      $(this).remove();
    });
  });
});


// ACCESSABILITY COLORS
$(function(){
  const accbuttonColors = $('.acc__button--colors');
  const accColorsNormal = $('.acc__button--colors-normal');
  const accColorsInv = $('acc__button--colors-inv');
  const accColorsBlue = $('acc__button--colors-blue');
  const accColorsYellow = $('acc__button--colors-yellow');
  const accColorsGreen = $('acc__button--colors-green');
  accbuttonColors.click(function(){
    accbuttonColors.removeClass('active');
    $('body').removeClass('acc-colors--normal');
    $(this).addClass('active');
    $('body').removeClass(function (index, className) {
        return className.match(/(^|\s)acc-colors--[^\s]*/g)?.join(' ');
      });
    if($(this).hasClass('acc__button--colors-normal')) {
      $('body').addClass('acc-colors--normal');
    }
    else if($(this).hasClass('acc__button--colors-inv')) {
      $('body').addClass('acc-colors--inv');
    }
    else if($(this).hasClass('acc__button--colors-blue')) {
      $('body').addClass('acc-colors--blue');
    }
    else if($(this).hasClass('acc__button--colors-yellow')) {
      $('body').addClass('acc-colors--yellow');
    }
    else if($(this).hasClass('acc__button--colors-green')) {
      $('body').addClass('acc-colors--green');
    }
  });
});

// ACCESSIBILITY IMAGES
$(function(){
  const accNoImages = $('.acc__images .acc__button--img');
  const accShowImages = $('.acc__images .acc__button--no');
  const allImages = $('.content img, .content video');

  accShowImages.click(function(){
    $('.acc__images .acc__button').removeClass('active');
    $(this).addClass('active');
    allImages.addClass('invisible');
  });
  accNoImages.click(function(){
    $('.acc__images .acc__button').removeClass('active');
    $(this).addClass('active');
    allImages.removeClass('invisible');
  });;
});

// ACCESSIBILITY VOICE
$(function () {
  const accVoice = $('.acc__speach .acc__button--voice');
  const accNoVoice = $('.acc__speach .acc__button--no');

  let isVoiceEnabled = false;

  $(document).off('click.voiceHandler'); 

  accVoice.click(function () {
    isVoiceEnabled = true;
    $('.acc__speach .acc__button').removeClass('active');
    $(this).addClass('active');
    $(document).on('click.voiceHandler', function (event) {
      if (!isVoiceEnabled) return;

      const target = $(event.target);
      const textData = target.text().trim();

      if (textData) {
        const voice = new SpeechSynthesisUtterance();
        voice.lang = "ru";
        voice.text = textData;
        voice.rate = 1.8; 
        window.speechSynthesis.speak(voice);
      }
    });
  });

  accNoVoice.click(function () {
    isVoiceEnabled = false;

    $('.acc__speach .acc__button').removeClass('active');
    $(this).addClass('active');

    window.speechSynthesis.cancel();

    $(document).off('click.voiceHandler');
  });
});

// ACCESSIBILITY FONT SIZE
$(function(){
  const accFontSizeSmall = $('.acc__fonts .acc__button--font-small');
  const accFontSizeNormal = $('.acc__fonts .acc__button--font-normal');
  const accFontSizeBig = $('.acc__fonts .acc__button--font-big');

  accFontSizeSmall.click(function(){
    $('.acc__fonts .acc__button').removeClass('active');
    $(this).addClass('active');
    $('html').css({'fontSize': '13px'});
  });

  accFontSizeNormal.click(function(){
    $('.acc__fonts .acc__button').removeClass('active');
    $(this).addClass('active');
    $('html').css({'fontSize': '16px'});
  });

  accFontSizeBig.click(function(){
    $('.acc__fonts .acc__button').removeClass('active');
    $(this).addClass('active');
    $('html').css({'fontSize': '20px'});
  });
});