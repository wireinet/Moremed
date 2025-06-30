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
    const hashContainer = $('.hash__list');
    doctorFilter.click(function(){
      doctorFilter[0].classList.remove("active");
      $(this).toggleClass("active");
      let buttonFilter = $(this).text();
      let doctorItem = $(".doctor__item");
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
        $('.hash').fadeOut(200);
      }
      else{
        $('.hash').fadeIn(200);
      }

      if($('.doctor__item.selected').length === 0){
        doctorFilter[0].classList.add("active");
        doctorItem.removeClass('selected');
        doctorItem.removeClass('hidden');
        $('.hash').fadeOut(200);
        hashContainer.empty();
      }

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




      });
  })