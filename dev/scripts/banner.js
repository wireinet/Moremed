// SLIDER BANNER HOME
setTimeout(()=>{
const slide1 = new Swiper('.banner__slider', {
    slidesPerView: '1',
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.banner .slider__arrow--next'
    },
    autoplay: {
        delay: 30000,
    }
});
}, 1000);

// SLIDER BANNER 
$(function(){
    const bannerVideo = $('.banner__video');
    bannerVideo.muted = true;
    bannerVideo[0].play();
});