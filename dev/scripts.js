//MENU




// fixed header -------------------------------------------------------------------------
// const topbar = $('.topbar');
// window.addEventListener('scroll', ()=>{
//     if(window.scrollY >= 150) {
//         topbar.addClass('fixed');
//     }
//     else {
//         topbar.removeClass('fixed');
//     }
// });

// MODALS -------------------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', ()=>{
//     const year = new Date().getFullYear();
//     const staticYear = document.querySelector('.copyright__year');
//     staticYear.innerHTML = year;
// });

// FAQ
// $(function(){
//     const faqAnswer = $('.faq__answer');
//     const faqAnswerActive = $('.faq__answer.active');
//     const faqItem = $('.faq__item');
//     $('.faq__item').on('click', function(){

//         if(!$(this).hasClass('active')) {
//             faqItem.removeClass('active');
//             faqAnswer.slideUp();
//             $(this).find(faqAnswer).slideDown();
//             $(this).toggleClass('active');
//         }
//         else {
//             $(this).find(faqAnswer).slideUp();
//             setTimeout(function(){
//                 $(this).removeClass('active')
//             }, 200);
//         }
//     });
// });

// function topTop(){
//     const totop =  $(".totop")
//     totop.hide();
//         $(window).scroll(function () {
//             if ($(this).scrollTop() > 100) {
//                 totop.fadeIn();
//             } else {
//                 totop.fadeOut();
//             }
//         });

//         // scroll body to 0px on click
//         totop.click(function () {
//             $('body,html').animate({
//                 scrollTop: 0
//             }, 800);
//             return false;
//         });
// }
// topTop();
