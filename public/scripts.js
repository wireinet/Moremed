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
    },
    autoplay: {
        delay: 30000,
    }
});
}, 1000);

// VIDEO POPUP
$(function() {
  const avatar = $('.avatar');
  if(avatar.hasClass('avatar--video')) {
    avatar.on('click', function(){
      alert('Видео');
    })
  }
})
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

$(function(){})
// USER
$(function(){
    const user = $('.user');
    const userIdent = $('.user__ident');
    user.click(function(){
        userIdent.toggleClass('user__ident--logined');
        alert('Welcome to our site!');
    });
});