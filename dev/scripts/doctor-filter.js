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