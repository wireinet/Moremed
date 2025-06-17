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


// --SCROLL
$(function(){
    var hashTagActive = "";
    $(".scroll").on("click touchstart" , function (event) {

            event.preventDefault();
            $('.topbar__menu').removeClass('topbar__menu--mob')
            var dest = 0;
            if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
                dest = $(document).height() - $(window).height();
            } else {
                dest = $(this.hash).offset().top;
            }
            $('html,body').animate({
                scrollTop: dest - 290 + "px"
            }, 2000, 'swing');
            
    });
});

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
