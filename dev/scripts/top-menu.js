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
    const swiperScrollBar = $('<div>', {class: 'swiper-scrollbar'});
    // Добавляем слайды в .swiper-wrapper
    topMenuSubmenuSlides.forEach(slide => {
      swiperWrapper.append(slide);
    });

    // Вставляем структуру Swiper
    topMenu.find('li.hassubmenu').append(swiperContainer.append(swiperWrapper, swiperScrollBar));

    $('.top-menu__nav .submenu').remove();
  }
  createSliderFromTopMenu();

  // Инициализация Swiper после создания слайдов
  const topMenuSlider = new Swiper('.top-menu__slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
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
        $(this).toggleClass('active');
        $(this).siblings('.top-menu__slider').slideToggle(300);
      }
    });

  // open submenu 2
  const submenuItemsLinks = $('.submenu__item a');
  submenuItemsLinks.on('click', function (e) {
  if ($(this).parent('li.submenu__item').hasClass('hassubmenu')) {
    e.preventDefault();
    submenuItemsLinks.removeClass('active');
    let closeThisSub = $('.subsubmenu__close');
    if(closeThisSub) {
      closeThisSub.remove();
      $('.top-menu__nav >.subsubmenu').remove();
      };
    $(this).toggleClass('active');

      let currentSubssubMenu = $(this).siblings('.subsubmenu');
      let menuParent = $(this).closest('.top-menu__nav');
      currentSubssubMenu.remove();
      menuParent.append(currentSubssubMenu);
      currentSubssubMenu.slideDown(600);
      let closeThisSubssubMenu = $('<div>', {class: 'subsubmenu__close'});
      $(this).parent('li.submenu__item').append(closeThisSubssubMenu);


    closeThisSubssubMenu.on('click', function () {
      currentSubssubMenu.slideUp(100);
      setTimeout(function () {
        let currentSubssubMenuOpened = menuParent.find('.subsubmenu');
        closeThisSubssubMenu.parent('li.submenu__item.hassubmenu').append(currentSubssubMenuOpened);
        closeThisSubssubMenu.remove();
      }, 150);


    });

    let topMenuSubmenuHeight = $(this).closest('.top-menu__nav').find('.top-menu__slider').height() + 100;
    currentSubssubMenu.css('top', topMenuSubmenuHeight);
  }
});

});///TOP MENU