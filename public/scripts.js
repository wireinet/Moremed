// ACCESSIBILITY
$(function(){
    const accessibility = $('.accessibility');
    let accessibilitySaveToStorage = false;
    accessibility.click(function(){
        accessibility.toggleClass('active');
        $("body").toggleClass('accessibility');
        accessibilitySaveToStorage = $(this).hasClass('active') ? true : false;
        localStorage.setItem('accessibility', accessibilitySaveToStorage);
        localStorage.getItem('accessibility');
    });
    if(localStorage.getItem('accessibility') === 'true') {
        accessibility.addClass('active');
        $("body").addClass('accessibility');
        }
});

// // Alphabet to current
$(function(){
  let badgesUniq = new Set();
  const servicesItem = $('.services__item');
  $.each(servicesItem, function(index, item){
    let badge = $(item).text().charAt(0);
    badgesUniq.add(badge);
  });
  for(let letter of badgesUniq) {
    // create alphabet list
    const alphabetList = $('.alphabet__list');
    let alphabetItem = $('<li>', {class:'alphabet__item', text: letter});
    alphabetList.append(alphabetItem);
  };
});

//ADD LETTER TO SERVICES ITEM
$(function(){
  const servicesItem = $('.services__item');
    $.each(servicesItem, function(index, item){
    let badge = $(item).text().charAt(0);
    let prevBadge = $(item).prev().text().charAt(0);
    if(prevBadge != badge){
      $(item).prepend('<div class="services__item-badge">'+badge+'</div>');
      }
      else {
        $(item).prepend('<div class="services__item-linked"></div>');
      }
  });
});

// CLICK ON ALPHABET
$(function(){
    const alphabetItem = $('.alphabet__item');
    alphabetItem.on('click', function() {
      $(this).toggleClass('active');
      // create reset
      if(!$('.alphabet__reset').length) {
        $('<li>', {class:'alphabet__item alphabet__reset'}).appendTo('.alphabet__list');
        }

      // reset
      $(function(){
        const alphabetReset = $('.alphabet__reset');
        alphabetReset.on('click', function(){
          $('.alphabet__item').removeClass('active');
          $('.alphabet__reset').remove();
          seviceItem.removeClass('hidden');
          seviceItem.removeClass('selected');
        })
      });
      
      // pressed letter
      let choisenLetter = $(this).text().charAt(0);
      let seviceItem = $('.services__item');
      $(seviceItem).each(function(index, service){
        // let serviceBadge = $(this).find('.services__item-badge').text();
        let serviceLetter = $(service).text().charAt(0);
        if(choisenLetter === serviceLetter) {
          setTimeout(function(){
            seviceItem.addClass('hidden');
            $(service).toggleClass('selected');
              if(!seviceItem.hasClass('selected')) {
                seviceItem.removeClass('hidden');
                $('.alphabet__reset').remove();
              };
          }, 100);
        }
      });

      

    })
  });
// SLIDER
setTimeout(()=>{
const avatar = new Swiper('.avatar', {
    slidesPerView: '1',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
});
}, 1000);

// check video POPUP
$(function() {
  let doctor = $('.doctor__item');
  let avatar = $('.avatar');
  doctor.each(function(index, item){
    let videoLink = $(this).find('.video-link').text();
    let currentAvatar = $(this).find('.avatar');
    if(videoLink != "") {
      currentAvatar.addClass('avatar--video');
    }
  });
  });

// VIDEO POPUP
$(function() {
  const avatar = $('.avatar');
    // click
    const popupVideo = $('.popup--video');
    avatar.click(function(){
      if($(this).hasClass('avatar--video')) {
      // add video
      let videoLink = $(this).parent().parent().find('.video-link').text();
      console.log(videoLink);
      let videoSrc = popupVideo.find('.video').find("source")[0];
      let videoBlock = popupVideo.find('.video');
      let play = popupVideo.find('.play');
      videoSrc.src = videoLink;
      videoBlock[0].load();
      play.click(function(){
        videoBlock[0].play();
        play.hide();
        videoBlock.click(function() {
          videoBlock[0].pause();
          play.show();
        });
      });
      // disable scroll
      const disableScrollBody = () => {
        document.body.dataset.scrollY = window.scrollY;
        
      }
      // open
      popupVideo.addClass('active');
      disableScrollBody();
      // close
      popupVideo.click(function(e){
        if(popupVideo.is(e.target)) {
          popupVideo.removeClass('active');
          enableScrollBody();
          videoSrc.src = ''
        }
      });
    }
    });
    // /click

});

// SLIDER BANNER HOME
setTimeout(()=>{
const slide1 = new Swiper('.banner__slider', {
    slidesPerView: '1',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    navigation: {
        nextEl: '.banner__nav'
    },
    autoplay: {
        delay: 30000,
    }
});
}, 1000);
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
// Create Doctor Filter
$(function(){
  const filterContainer = $(".doctor__filter-list");
  const doctors = $(".doctor__item");
  doctors.each(function(idex, item){
    let practice = $(item).find(".doctor__practice").text();
    let doctorFilterItem = $("<li>", {class: "doctor__filter-item", text: practice});
    filterContainer.append(doctorFilterItem);
  });
});
// use filter
$(function(){

    const doctorFilter = $(".doctor__filter-item");
    doctorFilter.click(function(){
      doctorFilter[0].classList.remove("active");
      $(this).toggleClass("active");
      let buttonFilter = $(this).text();
      let doctorItem = $(".doctor__item");
      doctorItem.addClass('hidden');
      console.log(buttonFilter);

      doctorItem.each(function(index, item){
        let practice = $(item).find(".doctor__practice").text();
        if(practice === buttonFilter){
          $(item).toggleClass('selected');
        }
      });

      if(buttonFilter === "Все"){
        doctorFilter.removeClass('active');
        $(this).addClass('active');
        doctorItem.removeClass('hidden');
        doctorItem.removeClass('selected');
      }


      });
  })
// FORM SELECT
$(function() {
  const selectActive = $('.appointment__selected');
  const selectlist = $('.appointment__list');
  const selectOption = $('.appointment__option');
  let defaultValueFormSelect = selectActive.find('.appointment__option');
  selectActive.each(function(index, item) {
    let defaultForSelect = $(this).find('.appointment__option').first().text();
    $(this).find('span').text(defaultForSelect);
    selectOption.click(function() {
      let selectedOption = $(this).text();
      selectActive.find('span').text(selectedOption);
    })
    $(this).click(function() {
      $(this).find('.appointment__list').toggleClass('opened');
    });

  });
});
$(function() {  
    $("body").niceScroll({
        cursorcolor:"#20AEE4",
        cursorwidth: "8px",
        scrollspeed: 120,
    });
    $(".services__list").niceScroll({
        cursorcolor:"#20AEE4",
        cursorwidth: "4px",
        scrollspeed: 120,
        autohidemode: false
    });
    
});

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
// USER
$(function(){
    const user = $('.user');
    const userIdent = $('.user__ident');
    user.click(function(){
        userIdent.toggleClass('user__ident--logined');
        alert('Welcome to our site!');
    });
});