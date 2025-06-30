// ARTICLES ALPHABET
$(function() {
  const alphabetContainer = $('.alphabet__list');
  let badgesUniq = new Set();
  const articleItem = $('.article__item');
  // get letters
  $.each(articleItem, function(index, item){
    let name = $(item).find('.article__name').text();
    let letter = $(item).find('.article__name').text().charAt(0);
    badgesUniq.add(letter);
  });
  // create alphabet items
  badgesUniq.forEach(item =>{
    alphabetContainer.append(`
      <li class="alphabet__item">
        ${item}
      </li>
    `);
  });
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