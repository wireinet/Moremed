$(function() {
    function startNiceScroll() {
        $("body").niceScroll({
            cursorcolor:"#20AEE4",
            cursorwidth: "8px",
            scrollspeed: 120,
        });
        $(".services__list").niceScroll({
            cursorcolor:"#20AEE4",
            cursorwidth: "4px",
            scrollspeed: 120,
            autohidemode: false
        });
        $(".appointment__date").niceScroll({
            cursorcolor:"#20AEE4",
            cursorwidth: "4px",
            scrollspeed: 120,
            autohidemode: false,
            grabcursorenabled: true,
            emulatetouch: true,
        });
        $(".appointment__time").niceScroll({
            cursorcolor:"#20AEE4",
            cursorwidth: "4px",
            scrollspeed: 120,
            autohidemode: false,
            grabcursorenabled: true,
            emulatetouch: true,
        });
    }
    startNiceScroll();
    // Рестарт Nicescroll при скроле
    $(window).scroll(function() {
        startNiceScroll();
        // if(matchMedia('(max-width: 640px)').matches) {
        //     $("body").niceScroll().remove()
        //     $(".services__list").niceScroll().remove()
        //     $(".appointment__date").niceScroll().remove()
        //     $(".appointment__time").niceScroll().remove()
        // }
    });
});