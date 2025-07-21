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
// APPOINTNENT SLIDER
setTimeout(()=>{
const appointmentDataSlider = new Swiper('.appointment__date .swiper', {
    slidesPerView: '3',
    spaceBetween: 20,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      840 :{
        slidesPerView: '4',
        spaceBetween: 10,
      },
      930:{
        slidesPerView: '5',
        spaceBetween: 10,
      },
      700:{
        slidesPerView: '3',
        spaceBetween: 10,
      },
      681:{
        slidesPerView: '3',
        spaceBetween: 1,
      },
      560:{
        slidesPerView: '5',
        spaceBetween: 10,
      },
      450:{
        slidesPerView: '4',
        spaceBetween: 1,
      },
      320:{
        slidesPerView: '3',
        spaceBetween: 1,
      },
    }
});
const appointmentTimeSlider = new Swiper('.appointment__time .swiper', {
    slidesPerView: '3',
    spaceBetween: 10,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      930:{
        slidesPerView: '5',
      },
      820:{
        slidesPerView: '4',
      },
      600:{
        slidesPerView: '5',
      },
      681:{
        slidesPerView: '3',
      },
      460:{
        slidesPerView: '4',
      },
      320:{
        slidesPerView: '3',
      },
    }
});
}, 1000);
// FORM SELECT
$(function() {
  const selectActive = $('.appointment__item--simple .appointment__selected');
  const selectList = $('.appointment__item--simple .appointment__list');
  selectActive.each(function(index, item) {
    let defaultForSelect = $(this).find('.appointment__option').first().text();
    $(this).find('span').text(defaultForSelect);

    $(this).click(function() {
      selectList.removeClass('opened');
      $(this).find('.appointment__list').addClass('opened');
    });
  });
});

// OPTION--SIMPLE
  const selectOption = $('.appointment__item--simple .appointment__option');
  selectOption.click(function() {
    let selectedOption = $(this).text();
    $(this).closest('.appointment__selected').find('span').text(selectedOption);
    setTimeout(() => {
      $(this).parent().removeClass('opened');
      $(this).parent().removeClass('opened');
      // Запись в скрытом поле формы
      if($(this).closest('.appointment__item--practice')) {
        $('#form-practice').val(selectedOption);
        console.log('Значение скрытого инпута специальности(#form-practice): ' + $('#form-practice').val());
      }
    }, 50);
  });

// DOCTORS LIST
$(function() {
  const doctorsList = $('.appointment__doctors-list');
  const doctorOption = $('.appointment__doctor');
  doctorOption.hide();
  doctorOption.first().show();
  doctorOption.click(function(){
    doctorsList.toggleClass('open');
    doctorOption.toggle();
    $(this).show().toggleClass('selected');
    // Запись в скрытом поле формы
    let docName = $('.appointment__doctor.selected').find('.appointment__doctor-name').text();
    if(docName) {
      $('#form-doctor').val(docName);
      console.log('Значение скрытого инпута имя врача (#form-doctor): ' + $('#form-doctor').val());
    }
  });
});

// DATA AND TIME SELECT
$(function() {
  // date
  const dateItem = $('.appointment__date-item');
  dateItem.click(function() {
    dateItem.removeClass('selected');
    $(this).toggleClass('selected');
    $('.appointment__time-item').removeClass('selected');
    // Запись в скрытом поле формы
    let dateChoisen = $('.appointment__date-item.selected').text();
    $('#form-date').val(dateChoisen);
    console.log('Значение скрытого инпута даты (#form-date): ' + $('#form-date').val());
  })
  // time
  const timeItem = $('.appointment__time-item');
  timeItem.click(function() {
    timeItem.removeClass('selected');
    $(this).toggleClass('selected');
    // Запись в скрытом поле формы
    let timeChoisen = $('.appointment__time-item.selected').text();
    $('#form-time').val(timeChoisen);
    console.log('Значение скрытого инпута времени(#form-time): ' + $('#form-time').val());
  })
});
// ARTICLES ALPHABET
$(function() {
  const alphabetContainer = $('.alphabet__list');
  let badgesUniq = new Set();
  const articleItem = $('.article__item');
  // get letters
  $.each(articleItem, function(index, item){
    let letter = $(item).find('.article__name').text().charAt(0);
    badgesUniq.add(letter);
  });
  // create alphabet items
  badgesUniq.forEach(item =>{
    alphabetContainer.append(`<li class="alphabet__item">${item}</li>`);
  });
});

// CLICK ON ALPHABET
$(function(){
    const alphabetItem = $('.articles .alphabet__item');
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
          articleItem.removeClass('hidden');
          articleItem.removeClass('selected');
        })
      });
      
      // pressed letter
      let choisenLetter = $(this).text();
      console.log(choisenLetter);
      let articleItem = $('.article__item');
      $(articleItem).each(function(index, article){
        let articleNameLetter = $(article).find('.article__name').text().charAt(0);
        if(choisenLetter === articleNameLetter) {
          setTimeout(function(){
            articleItem.addClass('hidden');
            $(article).toggleClass('selected');
              if(!articleItem.hasClass('selected')) {
                articleItem.removeClass('hidden');
                $('.alphabet__reset').remove();
              };
          }, 100);
        }
      });
    })
  });





// ARTICLES THEMES
$(function() {
  const themesContainer = $('.articles__filter-themes');
  const themeItem = $('.articles__filter-themes li');
  const articleItems = $('.article__item');
  const themesUniq = new Set();
  articleItems.each(function (index, item) {
    $(item).each(function (index, item) {
      const articleTheme = $(item).find('.article__tag').text();
      themesUniq.add(articleTheme);
  });
});
themesUniq.forEach(item =>{
  themesContainer.append(`
    <li>
      ${item}
    </li>
  `);
});
});
$(function() {
  $('.articles__filter-themes li').click(function(){
      $('.pagination__list').fadeOut(100);
      $('.articles__filter-themes li').first().removeClass('active');
      $(this).toggleClass('active');
      let theme = $(this).text();
      const activeThemes = $('.articles__filter-themes li.active')
      .map((i, el) => $(el).text().trim()).get();

      const articleItems = $('.article__item');
      articleItems.fadeOut(100);

      articleItems.each(function (index, item) {
      const articleTheme = $(item).find('.article__tag').text();

      if (activeThemes.length > 0 && activeThemes.includes(articleTheme)) {
        $(item).fadeIn(100);
      }
      });

    if (activeThemes.length === 0) {
      articleItems.fadeIn(100);
      $('.pagination__list').fadeIn(100);
    }
    $('.articles__filter-themes li').first().click(function(){
      articleItems.fadeIn(100);
      articleItems.removeClass('active');
    })
    });
});

// ARTICLES AUTHORS
$(function() {
  // Get authors
  let authors = $('.article__item');
  let authorsUniq = new Set();
  const authorsContainer = $('.articles__filter-authors');
  authors.each(function(item){
    let authorsExists = $(this).attr('data-author');
    authorsUniq.add(authorsExists);
  });
  // Render authors
  authorsUniq.forEach(item =>{
    authorsContainer.append(`
      <li>
        ${item}
      </li>
    `);
  });
  ///
  $('.articles__filter-authors li').click(function(){
    $('.pagination__list').fadeOut(100);
    $(this).toggleClass('active');
    let author = $(this).text();

    const activeAuthors = $('.articles__filter-authors li.active')
    .map((i, el) => $(el).text().trim()).get();

    const articleItems = $('.article__item');
    articleItems.fadeOut(100);

    articleItems.each(function (index, item) {
    const articleAuthor = $(item).data('author');

    if (activeAuthors.length > 0 && activeAuthors.includes(articleAuthor)) {
      $(item).fadeIn(100);
    }
    });

  if (activeAuthors.length === 0) {
    articleItems.fadeIn(100);
    $('.pagination__list').fadeIn(100);
  }

  });
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
  let blockItem = $('.block-item');
  let avatar = $('.avatar');
  blockItem.each(function(index, item){
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
          videoSrc.src = '';
          play.show();
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
// FILTER CHECKUPS
$(function(){
  let checkupFilterItem = $('.filter__check-item');
  let resetFilterButton = $('.filter__reset button');
  let checkupItems = $('.filter__content .checkup__item');
  
  // filter-checks
    checkupFilterItem.click(function(){
      $(this).toggleClass('checked');
    });

  // filter-reset
    resetFilterButton.click(function(){
      checkupFilterItem.removeClass('checked');
      checkupItems.fadeIn(300);
      $('.filter__count').removeClass('active');
      $('.filter__count span').text('');
    });
});
// CHECKUP SLIDER
setTimeout(()=>{
const checkupSlider = new Swiper('.checkup__slider', {
    slidesPerView: '1',
    spaceBetween: 30,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1200:{
        slidesPerView: '3',
      },
      920:{
        slidesPerView: '2',
      },
    }
});
}, 1000);
// checkup sublist open
$(function(){
  const checkupPopupList = $('.checkup__popuplist');
  const checkupSublist = $('.checkup__sublist');
  function checkScreenForCheckups() {
    if(matchMedia('(max-width:570px)').matches){ 
    checkupSublist.click(function(){
      checkupPopupList.removeClass('open');
      $(this).find('.checkup__popuplist').toggleClass('open');
    });
  }
  else {
    checkupSublist.mouseenter(function(){
      checkupPopupList.removeClass('open');
      $(this).find('.checkup__popuplist').addClass('open');
    });
    checkupSublist.mouseleave(function(){
      checkupPopupList.removeClass('open');
    });
  }
  }
  checkScreenForCheckups();
  $(window).resize(function(){checkScreenForCheckups()});
});


	$(document).mouseup( function(e){
		var stayOpen = $( ".checkup__popuplist.open" ); // тут указываем ID элемента
		if ( !stayOpen.is(e.target) // если клик был не по нашему блоку
      && stayOpen.has(e.target).length === 0 ) {
			stayOpen.removeClass('open');
		}
	});



// Checkup sublist count
$(function(){
  const checkupSublist = $('.checkup__sublist');
  const checkupSublistCount = $('.checkup__sublist span');

  checkupSublist.each(function(index, item){
    let popuplistItems = $(item).find('.checkup__popuplist li');
    $(item).find('span').text(popuplistItems.length)

  });
})
// CHECKUPS FILTERS
$(function(){

  const checkupFilterItems = $('.filter__check-item');
  const checkupItems = $('.checkup__item');
  const filterButtons = $('.filter__buttons');
  
  checkupFilterItems.click(function(){
  
    $(this).toggleClass('active');
    const activeFilters = $('.filter__check-item.checked')
    .map((i, el) => $(el).text().trim()).get();
    checkupItems.fadeOut(100);
    checkupItems.each(function (index, checkupitem) {
    const checkupForGender = $(checkupitem).find('.gender').text();
    const checkupForPractice = $(checkupitem).find('.practice').text();
    if (activeFilters.length > 0 && activeFilters.includes(checkupForGender)) {
      $(this).fadeIn(100);
      filterButtons.fadeIn(100);
      
    }
    if (activeFilters.length > 0 && activeFilters.includes(checkupForPractice)) {
      $(this).fadeIn(100);
      filterButtons.fadeIn(100);
    }
    });

  if (activeFilters.length === 0) {
    checkupItems.fadeIn(100);
    filterButtons.fadeOut(100);
  }

  // COUNT
  let filterCount = activeFilters.length;
  let filterCountBlock = $('.filter__count');
  let filterCountContainer = $('.filter__count span');
  let filterCurrentCount = filterCount;
  if(filterCount > 0){
    filterCountBlock.addClass('active');
    filterCountContainer.text(filterCurrentCount);
  }
  else {filterCountBlock.removeClass('active');}

  });

});

// CHECKUPS FILTERS MOB
$(function(){
  const filterSidebar = $('.filter__sidebar');
  const filterSidebaMob = $('.filter__sidebar-mob');
  const filterPopup = $('.popup--checkup-filter');
  const filterContainer = $('.checkups__filter');

  // sticky
  function stickyFilterMob() {
    let filterSidebaMobFromTop = filterSidebaMob.offset();
    $(window).scroll(function () {
        let pageContainer = $('.page__content');
        let checkupsContainer = $('.checkups__filter');
        if ($(this).scrollTop() > filterSidebaMobFromTop.top - 60) {
            filterSidebaMob.addClass('fixed');
            pageContainer.prepend(filterSidebaMob);
        }
        else {
            filterSidebaMob.removeClass('fixed');
            checkupsContainer.prepend(filterSidebaMob);
        }
    });
    }
  if($('body').hasClass('page--checkups')){
    stickyFilterMob();
  }

  function filterToMob(){
    if(matchMedia('(max-width: 700px)').matches){
      popup(filterSidebaMob, filterPopup);
      filterPopup.find('.popup__content').append(filterSidebar);
      let okButton = $('.filter__ok');
      okButton.click(function(){
        filterPopup.removeClass('active');
        enableScrollBody();
        let anchorToFilterFromTop = $("#checkups-list").offset();
        let anchorToFilterFromTopY = anchorToFilterFromTop.top - 100;
        $('html, body').animate({scrollTop: anchorToFilterFromTopY},'slow');
      });
    }
    else {
      filterContainer.prepend(filterSidebar);
    }
  }
  if($('body').hasClass('page--checkups')){
    $(window).resize(function(){ filterToMob()});
    filterToMob();
  }
});

// CHECKUPS ЗАПИСЬ
$(function(){
  let checkupAppointentButton = $('.checkup__zapis');
  let checkupAppointentPopup = $('.popup--checkup-appointent');
  popup(checkupAppointentButton, checkupAppointentPopup);
});
// EQUIPMENT
setTimeout(()=>{
const avatar = new Swiper('.clinic-block__slider', {
    slidesPerView: '1',
    loop: true,
    // navigation: {
    //   nextEl: '.clinic-block__slider .slider__arrow--next',
    //   prevEl: '.clinic-block__slider .slider__arrow--prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1200:{
        slidesPerView: '4',
      },
      900:{
        slidesPerView: '3',
      },
      600:{
        slidesPerView: '2',
      },
      480:{
        slidesPerView: '1',
      },
    }
});
}, 1000);
// COOKIE
$(function() {
  $(".cookie__ok").click(function() {
    $('.cookie').fadeOut(100);
  });
  $(".cookie__close").click(function() {
    $('.cookie').fadeOut(100);
  });
});
    // disable scroll
    const disableScrollBody = () => {
        document.body.dataset.scrollY = window.scrollY;
        document.body.style.cssText = `
            position:fixed;
            top:-${window.scrollY}px;
            left:0;
            width:100%;
            overflow:hidden;
        `
    }
    const enableScrollBody = () => {
        document.body.style.cssText = ``;
        window.scroll({
            top: document.body.dataset.scrollY
        });
    }
// DISCOUNT SLIDER
setTimeout(()=>{
const discountSlider = new Swiper('.discount__slider', {
    slidesPerView: '1',
    spaceBetween: 30,
    loop: true,
    // navigation: {
    //   nextEl: '.discount__slider .slider__arrow--next',
    //   prevEl: '.discount__slider .slider__arrow--prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1200:{
        slidesPerView: '3',
      },
      920:{
        slidesPerView: '2',
      },
    }
});
}, 1000);
// DOCTORS SLIDER
// 
$(function(){
  const doctorsSlider = new Swiper('.doctor__slider', {
      slidesPerView: '1',
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.doctor__slider .slider__arrow--next',
        prevEl: '.doctor__slider .slider__arrow--prev',
      },
      // pagination: {
      //     el: '.swiper-pagination',
      //     type: 'bullets',
      // },
      scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      },
      breakpoints: {
        1200:{
          slidesPerView: '3',
        },
        800:{
          slidesPerView: '2',
        },
      }
  });

// Create Doctor Filter

  const filterContainer = $(".doctors .doctor__filter-list");
  const doctors = $(".doctors .doctor__item");
  doctors.each(function(idex, item){
    let practice = $(item).find(".doctor__practice").text();
    let doctorFilterItem = $("<li>", {class: "doctor__filter-item", text: practice});
    filterContainer.append(doctorFilterItem);
  });

// use filters on home and doctors page
  $(function(){
  
    const doctorFilter = $(".doctors .doctor__filter-item");
    const hashContainer = $('.doctors__hash .hash__list');

    doctorFilter.click(function(){

      doctorFilter[0].classList.remove("active");
      $(this).toggleClass("active");
      let buttonFilter = $(this).text();

      
      if($('body').hasClass('home')){
        // Пытался в логику фильтра при слайдере, но одни глюки у свайпера...пока отказался от этой затеи:
        // doctorsHomePageSort();
        }
        else if($('body').hasClass('doctors')){
          doctorsPageSort();
          hashTags();
        }

      function doctorsPageSort(){
        let doctorItem = $(".doctor__item");
        let doctorHash = $(".doctors__hash");
        doctorItem.addClass('hidden');

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
            doctorHash.fadeOut(200);
          }
          else{
            doctorHash.fadeIn(200);
          }

        if($('.doctor__item.selected').length === 0){
          doctorFilter[0].classList.add("active");
          doctorItem.removeClass('selected');
          doctorItem.removeClass('hidden');
          doctorHash.fadeOut(200);
          hashContainer.empty();
        }
      }

      function hashTags(){
        // Список хеш-тегов
        const terapevtHash = ['Повышенная температура', 'Хронические недомогания', 'Кардиологические симптомы', 'Проблемы с пищеварением', 'Кожные изменения'];
        const hirurgHash = ['Сломанные кости', 'Внутренние боли', 'Боль в суставах', 'Боль при движении'];
        const nevrolHash = ['Головные боли', 'Мигрени', 'Судороги'];

      // Функция для вывода соответствующих хеш-тегов
      function currentHashItems(HashListItems){
          hashContainer.empty();
          HashListItems.forEach(function(linkName){
            const hashItem = document.createElement('li');
            hashItem.className = 'hash__item';
            let hashLink = document.createElement('a');
            hashLink.href = '#';
            hashLink.textContent = linkName;
            hashItem.appendChild(hashLink);
            hashContainer.append(hashItem);
          });
        }

        if(buttonFilter === "Терапевт"){
          currentHashItems(terapevtHash);
        }
        else if(buttonFilter === "Хирург"){
          currentHashItems(hirurgHash);
        }
        else if(buttonFilter === "Невролог"){
          currentHashItems(nevrolHash);
        }
        if(buttonFilter === "Все"){
          hashContainer.empty();
        }
      }

      function doctorsHomePageSort() {
        function updateSwiper() {
          setTimeout(() => {
            doctorsSlider.update();
            doctorsSlider.updateSlides();
            doctorsSlider.updateSize();
          }, 100);
        }
        let doctorItem = $(".doctor__slider .doctor__slide");
        doctorItem.addClass('hidden');
        doctorItem.each(function(index, item){
          updateSwiper();
          let practice = $(item).find(".doctor__practice").text();
          if(practice === buttonFilter){
            $(item).toggleClass('selected');
          }
        });
      }
      });
});
///on home and doctorspage

});
// DOCTOR SINGLE SLIDER
setTimeout(()=>{
const avatar = new Swiper('.doctor-single__slider', {
    slidesPerView: 1,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1200:{
        slidesPerView: '5',
      },
      900:{
        slidesPerView: '4',
      },
      700:{
        slidesPerView: '3',
      },
      600:{
        slidesPerView: '2',
      },
      500:{
        slidesPerView: '2',
      },
      480:{
        slidesPerView: '1',
      },
    }
});
}, 1000);
// DOCTOR SINGLE VIDEO OPEN
$(function(){
  if($('body').hasClass('doctor-single')){
    let singleAvatar = $('.doctor-single__avatar');
    let videoSingle = $('.doctor-single__avatar .video-link').text();
    if(videoSingle !== ""){
      let createdPlay = $('<div>', {class: 'play'});
      createdPlay.append(`<svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22.9309" cy="23.7529" r="22.9097" fill="white"/><path d="M15.0481 30.5959V16.91C15.0481 14.4207 17.7031 12.831 19.8974 14.0065L32.9793 21.0148C35.3233 22.2705 35.2899 25.643 32.9214 26.852L19.8395 33.5297C17.6479 34.6484 15.0481 33.0565 15.0481 30.5959Z" fill="#20AEE4"/></svg>`);
      $('.doctor-single__avatar').append(createdPlay);
      singleAvatar.find('.play').click(function(){
        let popupVideo = $('.popup--video');
        popupVideo.addClass('active');
        disableScrollBody();
        playVideofrom(videoSingle);
      });
    }

  }

});

// DOCTOR APOINTMENT
$(function(){
  let popupAppointment = $('.popup--appointment');
  let buttonAppointment = $('.doctor__zapis');
  popup(buttonAppointment, popupAppointment);
});
// EQUIPMENT
setTimeout(()=>{
const avatar = new Swiper('.equipment__slider', {
    slidesPerView: '1',
    loop: true,
    // navigation: {
    //   nextEl: '.equipment .slider__arrow--next',
    //   prevEl: '.equipment .slider__arrow--prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    // },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    breakpoints: {
      1200:{
        slidesPerView: '4',
      },
      900:{
        slidesPerView: '3',
      },
      600:{
        slidesPerView: '2',
      },
      480:{
        slidesPerView: '1',
      },
    }
});
}, 1000);
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
// GALLERY SINGLE SLIDER
$(function(){
setTimeout(()=>{
const checkupSingleSlider = new Swiper('.page__info-gallery-slider', {
    slidesPerView: '1',
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
});
}, 200);

});
// PLAY IN SINGLE SLIDER
$(function(){
  const playinSingleSlider = $('.page__info-gallery-item .play');
  playinSingleSlider.click(function(){
    $(this).siblings('.video').play();
  });
});
// INCLUDE
$(function(){
  const includeItem = $('.include__item');
  includeItem.click(function(){
    $(this).find('.include__content').slideToggle();
  });
});
// LIGHTBOX SWIPEBOX
$(function() {
  $('.swipebox').swipebox();
});
// MASKINPUT
$(function(){
  $("input[type='tel']").mask("+7(999) 999-9999");
});

// ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ПОНИМАНИЯ - ОТКЛЮЧИ ПОТОМ, КОГДА НА PHP БУДЕТ
function menuCurrentItem() {
  if($('body').hasClass('page--clinic')) {
    let currentMenuItem = $('.clinic .top-menu__nav li.menu__item').eq(4).find('a').addClass('active');
  }
  else if($('body').hasClass('page--doctors')) {
    let currentMenuItem = $('.doctors .top-menu__nav li.menu__item').eq(3).find('a').addClass('active');
  }
  else if($('body').hasClass('page--discounts')) {
    let currentMenuItem = $('.discounts .top-menu__nav li.menu__item').eq(2).find('a').addClass('active');
  }
  else if($('body').hasClass('page--checkups')) {
    let currentMenuItem = $('.checkups .top-menu__nav li.menu__item').eq(1).find('a').addClass('active');
  }
  else if($('body').hasClass('page--services')) {
    let currentMenuItem = $('.services .top-menu__nav li.menu__item').eq(0).find('a').addClass('active');
  }
  else if($('body').hasClass('page--articles')) {
    let currentMenuItem = $('.articles .top-menu__nav li.menu__item').eq(5).find('a').addClass('active');
  }
  else if($('body').hasClass('page--vacancy')) {
    let currentMenuItem = $('.vacancy .top-menu__nav li.menu__item').eq(6).find('a').addClass('active');
  }
  else if($('body').hasClass('page--clinic-vacancy')) {
    let currentMenuItem = $('.page--clinic-vacancy .top-menu__nav li.menu__item').eq(6).find('a').addClass('active');
  }
  else if($('body').hasClass('page--reviews')) {
    let currentMenuItem = $('.reviews .top-menu__nav li.menu__item').eq(7).find('a').addClass('active');
  }
  else if($('body').hasClass('page--contacts')) {
    let currentMenuItem = $('.contacts .top-menu__nav li.menu__item').eq(8).find('a').addClass('active');
  }
}
menuCurrentItem();
// MOBBAR SLIDER
$('document').ready(function(){
  function showMobbar(){
    $('.mobbar').addClass('open');
  }
  setTimeout(showMobbar, 1000);
});
setTimeout(()=>{
const mobbarSlider = new Swiper('.mobbar__slider', {
    slidesPerView: '5',
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
}, 200);
// MOBMENU
$(function() {
  const mobmenuTriggerButton = $('.hamburger');
  const mobmenu = $('.popup--mobmenu');
  const hassubmenu = $('.mobmenu__item.hassubmenu > a');
  hassubmenu.on('click', function(e) {
    e.preventDefault();
    $(this).parent('.hassubmenu').toggleClass('opened');
    $(this).siblings('.mobmenu__submenu').slideToggle();
  })
  popup(mobmenuTriggerButton, mobmenu);
});
// NICESCROLL
$(function() {
    function startNiceScroll() {
    // $("body").niceScroll({
    //     cursorcolor:"#20AEE4",
    //     cursorwidth: "8px",
    //     scrollspeed: 120,
    //     horizrailenabled: false
    // });
    // $(".services__list").niceScroll({
    //     cursorcolor:"#20AEE4",
    //     cursorwidth: "4px",
    //     scrollspeed: 120,
    //     autohidemode: false
    // });
    // $(".appointment__date").niceScroll({
    //     cursorcolor:"#20AEE4",
    //     cursorwidth: "4px",
    //     scrollspeed: 120,
    //     autohidemode: false,
    //     grabcursorenabled: true,
    //     emulatetouch: true,
    // });
    // $(".appointment__time").niceScroll({
    //     cursorcolor:"#20AEE4",
    //     cursorwidth: "0",
    //     scrollspeed: 120,
    //     autohidemode: false,
    //     grabcursorenabled: true,
    //     emulatetouch: true,
    // });
    // $(".checkup-block__slide").niceScroll({
    //     cursorcolor:"#20AEE4",
    //     cursorwidth: "4px",
    //     scrollspeed: 120,
    //     autohidemode: true,
    //     grabcursorenabled: true,
    //     emulatetouch: true,
    // });
    // $(".checkup__popuplist").niceScroll({
    //     cursorcolor:"#20ace400",
    //     cursorwidth: "4px",
    //     scrollspeed: 120,
    //     autohidemode: false,
    //     grabcursorenabled: true,
    //     emulatetouch: true,
    //     });
    $(".footer__menu").niceScroll({
        cursorcolor:"#20AEE4",
        cursorborder: "1px solid #20AEE4",
        cursorwidth: "2px",
        scrollspeed: 260,
        autohidemode: true,
        grabcursorenabled: false,
        emulatetouch: true,
        });
    }
    startNiceScroll();


});
// OPENBOX типа FAQ
$(function() {
  const openboxHeader = $('.openbox__header');
  openboxHeader.click(function(){
    let item = $(this).closest('.openbox__item');
    if(item.hasClass('open')){
      item.find('.openbox__content').slideUp(200, function(){
        item.removeClass('open');
      });
    }
    else {
      $(this).next('.openbox__content').slideToggle(200);
      item.toggleClass('open');
    }
  });
  // openboxHeader.click(function(){
  //   let item = $(this).closest('.openbox__item');
  //   if(item.hasClass('open')){

  //   }
    // if($(this).closest('.openbox__item').hasClass('openbox__header--active')){


    // }
  });
// ORGANS
$(function() {
  const organ = $('.organs__item');
  organ.click(function(){
    if($(this).hasClass('opened')){
      $(this).removeClass('opened');
      organ.find('.organ__info').slideUp(200);
    }
    else{
      organ.removeClass('opened');
      organ.find('.organ__info').slideUp(200);
      $(this).find('.organ__info').slideToggle(200);
      $(this).toggleClass('opened');
    }



  });
})
// PAGINATION
$(function(){
  const pagination = $('.pagination__item');
  pagination.on('click', function(){
    if(!$(this).hasClass('current')){
      pagination.removeClass('current');
      $(this).addClass('current');
    }
  });
});
// VIDEO POPUP ON SINGLE

function playVideofrom(videoSource){
  let popupVideo = $('.popup--video');
  popupVideo.addClass('active');
  disableScrollBody();
  let videoSrc = popupVideo.find('.video').find("source")[0];
  let videoBlock = popupVideo.find('.video');
  videoSrc.src = videoSource;
  videoBlock[0].load();
  let play = popupVideo.find('.play');
  play.click(function(){
    videoBlock[0].play();
    play.hide();
    videoBlock.click(function() {
      videoBlock[0].pause();
      play.show();
    });
  });
  // close
    popupVideo.click(function(e){
    if(popupVideo.is(e.target)) {
      popupVideo.removeClass('active');
      enableScrollBody();
      videoSrc.src = ''
    }
  });
}

$(function() {
  const singlePageGallery = $('.page__info-gallery-slider');
  if(singlePageGallery.length > 0 ) {
    let galleryItemVideo = $('.page__info-gallery-item .video');
    if(galleryItemVideo.length > 0) {
      let createdPlay = $('<div>', {class: 'play'});
      createdPlay.append(`<svg width="46" height="47" viewBox="0 0 46 47" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22.9309" cy="23.7529" r="22.9097" fill="white"/><path d="M15.0481 30.5959V16.91C15.0481 14.4207 17.7031 12.831 19.8974 14.0065L32.9793 21.0148C35.3233 22.2705 35.2899 25.643 32.9214 26.852L19.8395 33.5297C17.6479 34.6484 15.0481 33.0565 15.0481 30.5959Z" fill="#20AEE4"/></svg>`);
      galleryItemVideo.parent('.page__info-gallery-item').append(createdPlay);
      // play
      createdPlay.click(function(){
        let videoLink = $(this).parent().find('.video').find('source')[0].src;
        playVideofrom(videoLink);
      });
    }
  }
})
// /VIDEO POPUP
// POPUPs
const popup = function(button, popup) {
    const popupClose = $('.popup__close');
    const popupContent = $('.popup__content');
    let bg = $('.popup');
    button.click(function(){
      disableScrollBody();
      popup.addClass('active');
      if(popup.hasClass('popup--checkup-appointent')){
        // Подставляем заголовок с названием чекапа
        let currentCheckupName = $(this).closest('.checkup__item').find('.checkup__title h3').text();
        let popupTitleDefault = popup.find('.popup__title').text();
        let newPopupTitle = popupTitleDefault + ':' + "\n" + currentCheckupName;
        $('.popup__title').text(newPopupTitle);
        // Записываем его в скрытое поле name='checkup-name'
        let checkupNameField = popup.find('input[name="checkup-name"]');
        checkupNameField.val(currentCheckupName);
      }
    });
    popupClose.click(function(){
      let currentPopup = $(this).closest('.popup');
      function clearFormValues(){
        if(currentPopup.hasClass('popup--form')){
          currentPopup.find('input:not([type="submit"])').each(function(){
            if($(this).val() !== ''){
              $(this).val('');
            }
            $(this).removeClass('error');
          })
        }
      }
      // Если надо очистить форму при закрытии (Но, на esc на очистит, не прописывал):
      clearFormValues();
      popup.removeClass('active');
      enableScrollBody();
      $(this).find('.popup').find('input').each(function(){
        $(this).val('');
      });
      // При закрытии формы, сбрасываем заголовок:
      function defaultpopupTitle(){
        if(currentPopup.hasClass('popup--checkup-appointent')){
          setTimeout(function(){currentPopup.find('.popup__title').text('Запись на чекап')}, 300);
        }
      }
      defaultpopupTitle();

      // При закрытии сбрасываем поле name='checkup-name':
      let checkupNameField = $('.popup--checkup-appointent.active').find('input[name="checkup-name"]');
      checkupNameField.val('');
    });


      bg.click(function(e){
        if(!$(e.target).closest(popupContent).length){
          popup.removeClass('active');
          enableScrollBody();
        }
      });

    // close popup on esc
    $(document).keydown(function(e){
      if(e.keyCode === 27){
        popup.removeClass('active');
        enableScrollBody();
      }
      let popupAppointment = $('.popup--checkup-appointent');
      if(popupAppointment){
        setTimeout(function(){popupAppointment.find('.popup__title').text('Запись на чекап');}, 300);
      }
    })
}
// РЕЗЮМЕ
$(function() {
  if($('body').hasClass('page--clinic-vacancy')) {
    let buttonOpenSendResume = $('.clinic__resume button');
    let SendResumePopup = $('.popup--resume');
    popup(buttonOpenSendResume, SendResumePopup);
  }
});
// --SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(function(){
    var hashTagActive = "";
        $(".scroll").on("click touchstart" , function (event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else {
            dest = $(this.hash).offset().top;
        }
        $('html,body').animate({
            scrollTop: dest - 80 + "px"
        }, 2000, 'swing');
    });

});
// SEARCHING
$(function() {

function searchGlobal() {
  // Вероятно будет событе submit на форме, но для демонстрации у меня обычный div.search и событие клика + enter
  const searchSubmit = $('.search__submit');
  const searchInput = $('.search__input');
  // on submit:
  searchSubmit.on('click', function() {
    let inputValue = $(this).siblings('input');
    if(inputValue.val() != ''){
      window.location.replace('/search-page.html?search=' + encodeURIComponent(inputValue.val()));
    }
  });
  searchInput.keyup(function(e) {
    if(e.keyCode == 13) {
      if($(this).val() != ''){
        window.location.replace('/search-page.html?search=' + encodeURIComponent(searchInput.val()));
      }
    }
  });


} //searchGlobal

searchGlobal();

function searchResultOnSearchPage() {
  let searchResult = window.location.search;
  const urlData = new URLSearchParams(searchResult);
  let searchString = urlData.get('search');

  if ($('body').hasClass('search-page')) {
    let searchPageTitle = $('.services-single__title h1 span');
    searchPageTitle.text(searchString);
  }
}

searchResultOnSearchPage();

// Полноэкранный поиск
// При маленьком размере экрана (1127px)

function fullScreenSearch() {
  const searchOnMobile = $('.fullscren-search');
  const fullScreenSearchPopup = $('.popup--full-screen-search');
  popup(searchOnMobile, fullScreenSearchPopup);
}
fullScreenSearch();

});//
// TABS
$(function () {
  const tabs = $('.tabs__tab-label');
  const tabContent = $('.tabs__tab-content');

  function removeActiveTab(collection) {
    collection.removeClass('active');
  }

  function setToActive(collection, index) {
    collection.eq(index).addClass('active');
  }

  tabs.on('click', function () {
    const currentIndex = $(this).index();

    removeActiveTab(tabs);
    removeActiveTab(tabContent);

    setToActive(tabs, currentIndex);
    setToActive(tabContent, currentIndex);
  });
});
// TABLE OF CONTENT
// create TOC list
$(function(){
  const tocContainer = $('.toc__list');
  let articleTitles = $('.article-single__post h2');
  articleTitles.each(function(index, title){
    let titles = $(title).text();
    tocContainer.append(`
      <li><a class="scroll toc__item" href="#${titles}">${titles}</a></li>
      `);
  });
});

// TOC FIXED
$(function(){
  const toc = $('.article-single__toc-track');
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      if(!toc.hasClass('fixed')){
        toc.addClass('fixed');
        let tocCollapseButton = $('<div>', {class: 'toc__collapse'});
        $('.toc').append(tocCollapseButton);
        // TOC COLLAPSED

            $('.toc__collapse').click(function(){
              $('.toc').toggleClass('collapsed');
            });
      }
    } else {
      toc.removeClass('fixed');
      $('.toc__collapse').remove();
      // $('.toc').removeClass('collapsed');
    }
  });
});

// TOC REPLACE
$(function(){
  const toc = $('.article-single__toc');

  function moveTocToHeader(){
      toc.remove();
      $('.article-single__image').after(toc);
    }
  function moveTocToSide(){
      toc.remove();
      $('.article-single__content').prepend(toc);
    }

    function tocAdaptive(){
      if(matchMedia('(max-width: 960px)').matches){
        moveTocToHeader();
      }
      else {moveTocToSide()}
    }

    $(window).resize(function(){
      tocAdaptive();
    });

});

// TOC LINK
$(function(){
  let headers = $('.article-single__post h2');
  headers.each(function(index, header){
    $(this).attr('id', `title-${index + 1}`);
  });
  let links = $('.toc__list');
  links.each(function(index, link){
    let links = $(link).find('a');
    links.each(function(index, link){
      $(this).attr('href', `#title-${index + 1}`);
    })
  });
});

// TOC ACTIVE LINK
$(function(){
  $(window).scroll(function(){
  });
});
// DISCOUNT SLIDER
setTimeout(()=>{
const topMenuDiscountSlider = new Swiper('.subsubmenu__discount', {
    slidesPerView: '1',
    spaceBetween: 20,
    loop: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
});
}, 1000);
// TOPMENU
$(function () {
  function createSliderFromTopMenu() {
    const topMenu = $('.top-menu__nav');
    const topMenuSubmenuItem = $('.top-menu__nav .submenu__item');
    const topMenuSubmenuSlides = []; 

    // Группируем элементы по 4 в .swiper-slide
    for (let i = 0; i < topMenuSubmenuItem.length; i += 4) {
      const slide = $('<div>', { class: 'swiper-slide' });
      topMenuSubmenuItem.slice(i, i + 4).each(function () {
        slide.append(this);
      });
      topMenuSubmenuSlides.push(slide);
    }

    // Создаём структуру Swiper
    const swiperContainer = $('<div>', { class: 'swiper top-menu__slider' });
    const swiperWrapper = $('<div>', { class: 'swiper-wrapper' });
    const swiperNext = $('<div>', {class: 'swiper-button-next'});
    const swiperPrev = $('<div>', {class: 'swiper-button-prev'});
    // Добавляем слайды в .swiper-wrapper
    topMenuSubmenuSlides.forEach(slide => {
      swiperWrapper.append(slide);
    });

    // Вставляем структуру Swiper
    topMenu.find('li.hassubmenu').append(swiperContainer.append(swiperWrapper, swiperNext, swiperPrev));

    $('.top-menu__nav .submenu').remove();
  }
  createSliderFromTopMenu();

  // Инициализация Swiper после создания слайдов
  const topMenuSlider = new Swiper('.top-menu__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });

  // open submenu 1
    const topMenuLink = $('.top-menu__nav a');
    topMenuLink.on('click', function (e) {
      if($(this).parent('li.menu__item').hasClass('hassubmenu')){
        e.preventDefault();
          $(this).toggleClass('active-submenu');
          $(this).siblings('.top-menu__slider').slideToggle(300);
      }
    });

  // open submenu 2
  const subsubmenus = $('.subsubmenu');
  const submenuItemsLinks = $('.submenu__item a');
  submenuItemsLinks.on('click', function (e) {
  if ($(this).parent('li.submenu__item').hasClass('hassubmenu')) {
    e.preventDefault();
    submenuItemsLinks.removeClass('active');
    let closeThisSub = $('.subsubmenu__close');

    $(this).toggleClass('active');

    // ID search
    let openedSubsubmenu = $('.top-menu__nav > .subsubmenu'); 
    let openedSubsubmenuId = openedSubsubmenu.attr('id');

    // delete close anywhere
    $('.subsubmenu__close').remove();
    // По всему меню ищем id чтобы совпал с открытым (чтобы понимать куда вернуть):
    const menuItems = $('.top-menu__slider .submenu__item > a');
    menuItems.each(function (index, item) {
      let menuItemName = $(this).text();
      if (menuItemName === openedSubsubmenuId) {
        $(this).parent('.submenu__item.hassubmenu').append(openedSubsubmenu);
        openedSubsubmenu.slideToggle(100);
        openedSubsubmenu.toggleClass('opened');
      }
    });

    // open
    let currentSubsubMenu = $(this).siblings('.subsubmenu');
    let currentSubsubmenuFrom = $(this).text();
    let menuParent = $(this).closest('.top-menu__nav');
    menuParent.append(currentSubsubMenu);
    currentSubsubMenu.attr('id', currentSubsubmenuFrom);
    subsubmenus.removeClass('opened');
    currentSubsubMenu.addClass('opened');
    // position
    let topMenuSubmenuHeight = $(this).closest('.top-menu__nav').find('.top-menu__slider').height() + 100;
    currentSubsubMenu.css('top', topMenuSubmenuHeight);

    // close create
    let closeThisSubsubMenu = $('<div>', {class: 'subsubmenu__close'});
    $(this).parent('li.submenu__item').append(closeThisSubsubMenu);

    // open subsubmenu from topmenu
    currentSubsubMenu.slideToggle(100);

    // close
    closeThisSubsubMenu.on('click', function () {
      let currentMenuItemName = $(this).parent('.submenu__item');
      let currentOpenSubsubmenu = $('.top-menu__nav > .subsubmenu');
      currentMenuItemName.append(currentOpenSubsubmenu);
      currentOpenSubsubmenu.slideUp(100);
      $(this).siblings('a').removeClass('active');
      currentSubsubMenu.removeClass('opened');
      $(this).remove();
    });
  }
});


	$(document).mouseup( function(e){
    let submenu = $('.top-menu__slider');
    let topMenu = $('.top-menu');
    let menuNavItem = $('.active-submenu');
		if ( !topMenu.is(e.target)
      && topMenu.has(e.target).length === 0 && !subsubmenus.is(e.target) && subsubmenus.has(e.target).length === 0) {
        closeAllSubmenus();
      }
    if ( menuNavItem.is(e.target)) {
        e.preventDefault();
      }
	});

    $(document).keydown(function(e){if(e.keyCode === 27){closeAllSubmenus()}});

    function closeAllSubmenus(){
          if(subsubmenus.hasClass('opened')){
          currentActiveSubsubmenuName = $('.top-menu__slider .submenu__item > a.active');
          let currentActiveSubmenuItem = currentActiveSubsubmenuName.parent('.submenu__item');
          let currentOpenSubsubmenu = $('.top-menu__nav > .subsubmenu.opened');
          let additionCloseMenuButton = $('.subsubmenu__close');
          currentOpenSubsubmenu.slideUp(100);
          currentOpenSubsubmenu.removeClass('opened');
            setTimeout(function(){
              currentActiveSubmenuItem.append(currentOpenSubsubmenu);
              currentActiveSubsubmenuName.removeClass('active');
              additionCloseMenuButton.remove();
              $('.active-submenu').removeClass('active-submenu');
            },100);
            setTimeout(function(){$('.top-menu__slider').slideUp(100);},100);
          }
        else {
          $('.top-menu__slider').slideUp(100);
          $('.active-submenu').removeClass('active-submenu');
        }
      }




});///TOP MENU
// TOPBAR
$(function() {
  $(window).scroll(function() {
    const topbar = $('.topbar');
    if ($(window).scrollTop() > 100 && !$('body').hasClass('accessibility')) {
      topbar.addClass('fixed');
    } else {
      topbar.removeClass('fixed');
    } 
  });

});
// USER
$(function(){
    function loginform(){
        const user = $('.user');
        const popupLogin = $('.popup--login-form');
        popup(user, popupLogin);
        let loginRequest = $('.login-form input[type="submit"]');
        loginRequest.on('click', function(e){
            let userLogin = $('.login-form input[name="username"]');
            let userPass = $('.login-form input[name="userpass"]');
            e.preventDefault();
            function checkFilled(){
                if (userLogin.val() == "" ){userLogin.addClass('error');}
                else {userLogin.removeClass('error');}

                if (userPass.val() == "" ){userPass.addClass('error');}
                else {userPass.removeClass('error');}
            }
            if (userLogin.val() != "" && userPass.val() != ""){
                userLogin.removeClass('error');
                userPass.removeClass('error');
                userLogin.addClass('access-granted');
                userPass.addClass('access-granted');
                setTimeout(function(){
                    popupLogin.removeClass('active');
                    enableScrollBody();
                    logined();
                }, 1000);
            }
            else {checkFilled();}

        });
    }
    loginform();
    function logined(){
        $('.user__ident').toggleClass('user__ident--logined');
        // И все что нужно сделать при залогиненном пользователе...
        // Загрузить аватар и тд..
    }
});
// ЗАКАЗ ЗВОНКА
$(function(){
  popup($('.zakaz-zvonka'), $('.popup--zakaz-zvonok'));
});