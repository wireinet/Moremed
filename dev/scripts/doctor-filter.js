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