// TABLE OF CONTENT
// create TOC list
$(function(){
  const tocContainer = $('.toc__list');
  let articleTitles = $('.article-single__post h2');
  articleTitles.each(function(index, title){
    let titles = $(title).text();
    tocContainer.append(`
      <li><a class="scroll toc__item" href="#${titles}">${titles}</a></li>
      `);
  });
});

// TOC FIXED
$(function(){
  const toc = $('.article-single__toc-track');
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      if(!toc.hasClass('fixed')){
        toc.addClass('fixed');
        let tocCollapseButton = $('<div>', {class: 'toc__collapse'});
        $('.toc').append(tocCollapseButton);
        // TOC COLLAPSED

            $('.toc__collapse').click(function(){
              $('.toc').toggleClass('collapsed');
            });
      }
    } else {
      toc.removeClass('fixed');
      $('.toc__collapse').remove();
      // $('.toc').removeClass('collapsed');
    }
  });
});

// TOC REPLACE
$(function(){
  const toc = $('.article-single__toc');

  function moveTocToHeader(){
      toc.remove();
      $('.article-single__image').after(toc);
    }
  function moveTocToSide(){
      toc.remove();
      $('.article-single__content').prepend(toc);
    }

    function tocAdaptive(){
      if(matchMedia('(max-width: 960px)').matches){
        moveTocToHeader();
      }
      else {moveTocToSide()}
    }

    $(window).resize(function(){
      tocAdaptive();
    });

});

// TOC LINK
$(function(){
  let headers = $('.article-single__post h2');
  headers.each(function(index, header){
    $(this).attr('id', `title-${index + 1}`);
  });
  let links = $('.toc__list');
  links.each(function(index, link){
    let links = $(link).find('a');
    links.each(function(index, link){
      $(this).attr('href', `#title-${index + 1}`);
    })
  });
});

// TOC ACTIVE LINK
$(function(){
  $(window).scroll(function(){
  });
});