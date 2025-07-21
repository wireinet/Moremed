// // ACCESSIBILITY BUTTON
$(function(){
    const accessibility = $('.accessibility');
    let accessibilitySaveToStorage = false;
    accessibility.click(function(e){
        e.preventDefault();
        accessibility.toggleClass('active');
        $("body").toggleClass('accessibility acc-colors acc-colors--normal');
        accessibilitySaveToStorage = $(this).hasClass('active') ? true : false;
        accPanel.toggle();
        // add styles
        if($('body').hasClass('accessibility')) {
          $('head').append($('<link rel="stylesheet" type="text/css" href="accessibility.css" />'));
        }
        else {
          $('head').find('link[href="accessibility.css"]').attr('href', '');
        }
        // local save
        localStorage.setItem('accessibility', accessibilitySaveToStorage);
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



// STORAGE
// $(function(){
//   localStorage.getItem('accessibility');
//   if(localStorage.getItem('accessibility') === 'true') {
//     $('.accessibility').addClass('active');
//     $('.accessibility__panel').addClass('active');
//     $("body").addClass('accessibility acc-colors acc-colors--normal');
//     $('head').append($('<link rel="stylesheet" type="text/css" href="accessibility.css" />'));
//     }
// });