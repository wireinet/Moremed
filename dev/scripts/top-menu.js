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

    // Добавляем слайды в .swiper-wrapper
    topMenuSubmenuSlides.forEach(slide => {
      swiperWrapper.append(slide);
    });

    // Вставляем структуру Swiper
    topMenu.find('li.hassubmenu').append(swiperContainer.append(swiperWrapper));
    let swiperScrollBar = $('<div>', {class: 'swiper-scrollbar'});
    swiperContainer.append(swiperScrollBar);
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
        $(this).siblings('.top-menu__slider').slideToggle(300);
      }
    });

});///TOP MENU
