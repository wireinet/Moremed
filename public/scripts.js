// MOB MENU
$(function(){
    $('.hamburger').on('click', function(){
        $('.topbar__menu').css('opacity', 0)
        $('.topbar__menu').toggleClass('topbar__menu--mob');
        $('.topbar__menu').animate({opacity: 1}, 300);
    });

    function moveMenuInHamburger() {
        if(window.matchMedia('(max-width:1100px)').matches){
            $('.topbar__menu').appendTo($('.topbar__hamburger'));
        }
        else {
            // $('.topbar__hamburger').remove($('.topbar__menu'));
            $('.topbar__menu').appendTo($('.topbar__group--phone'));
            $('.topbar__button').css('order', 100);
        }
    }
    moveMenuInHamburger()
    $(window).resize(moveMenuInHamburger);
});

// fixed header -------------------------------------------------------------------------
const topbar = $('.topbar');
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 150) {
        topbar.addClass('fixed');
    }
    else {
        topbar.removeClass('fixed');
    }
});

// MODALS -------------------------------------------------------------------------------
    // disable scroll
    const disableScrollBody = () => {
        document.body.dataset.scrollY = window.scrollY;
        document.body.style.cssText = `
            position:fixed;
            top:-${window.scrollY}px;
            left:0;
            width:100%;
            overflow:hidden;
            height:100vh;
        `
    }
    const enableScrollBody = () => {
        document.body.style.cssText = ``;
        window.scroll({
            top: document.body.dataset.scrollY
        });
    }

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

document.addEventListener('DOMContentLoaded', ()=>{
    const year = new Date().getFullYear();
    const staticYear = document.querySelector('.copyright__year');
    staticYear.innerHTML = year;
})

// SLIDERS
setTimeout(()=>{
const slide1 = new Swiper('.equipment__slider--eq .swiper', {
    spaceBetween: 30,
    slidesPerView: '1',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        400: {
            slidesPerView: '1',
            spaceBetween: 10,
        },
        900: {
            spaceBetween: 5,
            slidesPerView: '2',
        },
        1000: {
            spaceBetween: 10,
            slidesPerView: '3',
        }
    },
    autoplay: {
        delay: 30000,
    }
});
const slide2 = new Swiper('.equipment__slider--mt .swiper', {
    spaceBetween: 30,
    slidesPerView: '1',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        400: {
            slidesPerView: '1',
            spaceBetween: 10,
        },
        900: {
            spaceBetween: 5,
            slidesPerView: '2',
        },
        1000: {
            spaceBetween: 10,
            slidesPerView: '3',
        }
    },
    autoplay: {
        delay: 30000,
    }
});
// WORK SLIDERS
const slider_Work_Kv = new Swiper('.work__slider--kv .swiper', {
    spaceBetween: 30,
    slidesPerView: '1',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        960: {
            slidesPerView: '2',
            spaceBetween: 10,
        }
    },
    autoplay: {
        delay: 8000,
    }
});
const slider_Work_Other = new Swiper('.work__slider--other .swiper', {
    spaceBetween: 30,
    slidesPerView: '1',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        960: {
            slidesPerView: '2',
            spaceBetween: 10,
        }
    },
    autoplay: {
        delay: 8000,
    }
});

}, 200);

// WORK TABS
$(function(){
    const sliders = $('.work__slider');
    const sliderKv = $('.work__slider--kv');
    const sliderOther = $('.work__slider--other');
    const tabsLabel = $('.work__tabs .tabs__label');
    tabsLabel.click(function(index){
        sliders.removeClass('active');
        let currentTab = $(this).index()+1;
        if(currentTab === 1) {
            sliderKv.addClass('active');
            tabsLabel.removeClass('active');
            $(this).addClass('active');
        }
        if(currentTab === 2) {
            sliderOther.addClass('active');
            tabsLabel.removeClass('active');
            $(this).addClass('active');
        }
    });
});

// SWIPEBOX
$(function(){
    $('.swipebox').swipebox({
        removeBarsOnMobile : false,
        hideBarsDelay: 12000,
        afterOpen: disableScrollBody,
        afterClose: enableScrollBody,
    });
});

// FAQ
$(function(){
    const faqAnswer = $('.faq__answer');
    const faqAnswerActive = $('.faq__answer.active');
    const faqItem = $('.faq__item');
    $('.faq__item').on('click', function(){

        if(!$(this).hasClass('active')) {
            faqItem.removeClass('active');
            faqAnswer.slideUp();
            $(this).find(faqAnswer).slideDown();
            $(this).toggleClass('active');
        }
        else {
            $(this).find(faqAnswer).slideUp();
            setTimeout(function(){
                $(this).removeClass('active')
            }, 200);
        }
    });
});


// function get_ya_browser() {
//     var ua = navigator.userAgent;    
//     if (!ua.search(/YaBrowser/) > 0) {topTop()}
// }
// get_ya_browser();

function topTop(){
    const totop =  $(".totop")
    totop.hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                totop.fadeIn();
            } else {
                totop.fadeOut();
            }
        });

        // scroll body to 0px on click
        totop.click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
}
topTop();