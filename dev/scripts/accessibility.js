// // ACCESSIBILITY BUTTON
// $(function(){
//     const accessibility = $('.accessibility');
//     let accessibilitySaveToStorage = false;

//     accessibility.click(function(){
//         accessibility.toggleClass('active');
//         $("body").toggleClass('accessibility');
//         accessibilitySaveToStorage = $(this).hasClass('active') ? true : false;
//         localStorage.setItem('accessibility', accessibilitySaveToStorage);
//         localStorage.getItem('accessibility');
//         accPanel.toggle();
//     });
//     if(localStorage.getItem('accessibility') === 'true') {
//         accessibility.addClass('active');
//         $("body").addClass('accessibility');
//         }
// });
// // ACCESSIBILITY PANEL
// $(function(){
//     accPanel = $('.accessibility__panel');

// });