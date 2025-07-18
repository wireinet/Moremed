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