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
        $('.top-menu__slider').removeClass('openSub1');
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