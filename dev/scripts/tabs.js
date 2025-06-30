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