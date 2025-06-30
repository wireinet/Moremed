// ВРЕМЕННОЕ РЕШЕНИЕ ДЛЯ ПОНИМАНИЯ - ОТКЛЮЧИ ПОТОМ, КОГДА НА PHP БУДЕТ
function menuCurrentItem() {
  if($('body').hasClass('page--clinic')) {
    let currentMenuItem = $('.clinic .menu li.menu__item').eq(4).find('a').addClass('active');
  }
  else if($('body').hasClass('page--doctors')) {
    let currentMenuItem = $('.doctors .menu li.menu__item').eq(3).find('a').addClass('active');
  }
  else if($('body').hasClass('page--discounts')) {
    let currentMenuItem = $('.discounts .menu li.menu__item').eq(2).find('a').addClass('active');
  }
  else if($('body').hasClass('page--checkups')) {
    let currentMenuItem = $('.checkups .menu li.menu__item').eq(1).find('a').addClass('active');
  }
  else if($('body').hasClass('page--services')) {
    let currentMenuItem = $('.services .menu li.menu__item').eq(0).find('a').addClass('active');
  }
  else if($('body').hasClass('page--articles')) {
    let currentMenuItem = $('.articles .menu li.menu__item').eq(5).find('a').addClass('active');
  }
  else if($('body').hasClass('page--vacancy')) {
    let currentMenuItem = $('.vacancy .menu li.menu__item').eq(6).find('a').addClass('active');
  }
  else if($('body').hasClass('page--clinic-vacancy')) {
    let currentMenuItem = $('.page--clinic-vacancy .menu li.menu__item').eq(6).find('a').addClass('active');
  }
  else if($('body').hasClass('page--reviews')) {
    let currentMenuItem = $('.reviews .menu li.menu__item').eq(7).find('a').addClass('active');
  }
  else if($('body').hasClass('page--contacts')) {
    let currentMenuItem = $('.contacts .menu li.menu__item').eq(8).find('a').addClass('active');
  }
}
menuCurrentItem();